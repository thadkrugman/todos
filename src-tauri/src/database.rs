use rusqlite::{Connection, Result};
use serde::Serialize;
use std::path::PathBuf;
use tauri::api::path::app_data_dir; // Make sure to use app_data_dir
use tauri::Config; // Import the Config struct

#[derive(Serialize)]
pub struct Todo {
    pub id: i32,
    pub title: String,
    pub completed: i32,
}

pub fn establish_connection(config: &Config) -> Result<Connection> {
    // Use the app_data_dir function with the provided Config reference
    let app_data_path: PathBuf = app_data_dir(config).expect("Failed to find the app data directory");

    // Use a "data" directory within the app data directory for storing the database
    let data_path = app_data_path.join("data");

    // Now specify the database file within this "data" directory
    let db_file_path = data_path.join("todos.db");

    // This line attempts to create the "data" directory if it does not exist
    std::fs::create_dir_all(&data_path).expect("Failed to create the data directory");

    // Open a connection to the database at the specified path
    let conn = Connection::open(db_file_path)?;

    // Initialize the database schema if it hasn't been already
    conn.execute(
        "CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            completed INTEGER NOT NULL DEFAULT 0
        )",
        [],
    )?;

    Ok(conn)
}

pub fn add_todo(config: &Config, title: &str) -> Result<()> {
    let conn = establish_connection(config)?;
    conn.execute(
        "INSERT INTO todos (title) VALUES (?)",
        [title],
    )?;
    Ok(())
}

pub fn remove_todo(config: &Config, id: i32) -> Result<()> {
    let conn = establish_connection(config)?;
    conn.execute("DELETE FROM todos WHERE id = ?", [id])?;
    Ok(())
}

pub fn update_todo_status(config: &Config, id: i32, completed: i32) -> Result<()> {
    let conn = establish_connection(config)?;
    conn.execute(
        "UPDATE todos SET completed = ? WHERE id = ?",
        [completed, id],
    )?;
    Ok(())
}

pub fn get_all_todos(config: &Config) -> Result<Vec<Todo>> {
    let conn = establish_connection(config)?;
    let mut stmt = conn.prepare("SELECT id, title, completed FROM todos WHERE completed = 0")?;
    let todos = stmt
        .query_map([], |row| {
            Ok(Todo {
                id: row.get(0)?,
                title: row.get(1)?,
                completed: row.get(2)?,
            })
        })?
        .collect::<Result<Vec<_>>>()?;
    Ok(todos)
}

pub fn get_completed_todos(config: &Config) -> Result<Vec<Todo>> {
    let conn = establish_connection(config)?;
    let mut stmt = conn.prepare("SELECT id, title, completed FROM todos WHERE completed = 1")?;
    let todos = stmt
        .query_map([], |row| {
            Ok(Todo {
                id: row.get(0)?,
                title: row.get(1)?,
                completed: row.get(2)?,
            })
        })?
        .collect::<Result<Vec<_>>>()?;
    Ok(todos)
}

use rusqlite::{Connection, Result};
use serde::Serialize;
use std::path::PathBuf;
use tauri::api::path::app_data_dir; 
use tauri::Config; 

#[derive(Serialize)]
pub struct Todo {
    pub id: i32,
    pub title: String,
    pub completed: i32,
}

pub fn establish_connection(config: &Config) -> Result<Connection> {
    let app_data_path: PathBuf = app_data_dir(config).expect("Failed to find the app data directory");
    let data_path = app_data_path.join("data");
    let db_file_path = data_path.join("todos.db");
    std::fs::create_dir_all(&data_path).expect("Failed to create the data directory");
    let conn = Connection::open(db_file_path)?;

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

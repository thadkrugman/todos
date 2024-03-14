// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod database;

use tauri::{State, Config};

// Assuming the Todo struct and related functions are defined in the database module
// and updated to accept a `&Config` parameter as previously discussed.

struct AppConfig {
    config: Config,
}

#[tauri::command]
fn add_todo(state: State<AppConfig>, title: &str) -> Result<(), String> {
    match database::add_todo(&state.config, title) {
        Ok(()) => Ok(()),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
fn remove_todo(state: State<AppConfig>, id: i32) -> Result<(), String> {
    match database::remove_todo(&state.config, id) {
        Ok(()) => Ok(()),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
fn update_todo_status(state: State<AppConfig>, id: i32, completed: i32) -> Result<(), String> {
    match database::update_todo_status(&state.config, id, completed) {
        Ok(()) => Ok(()),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
fn get_all_todos(state: State<AppConfig>) -> Result<Vec<database::Todo>, String> {
    match database::get_all_todos(&state.config) {
        Ok(todos) => Ok(todos),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
fn get_completed_todos(state: State<AppConfig>) -> Result<Vec<database::Todo>, String> {
    match database::get_completed_todos(&state.config) {
        Ok(todos) => Ok(todos),
        Err(e) => Err(e.to_string()),
    }
}

fn main() {
    let context = tauri::generate_context!(); // Call once and store in a variable

    tauri::Builder::default()
        .manage(AppConfig {
            config: context.config().clone(), // Use the stored context
        })
        .invoke_handler(tauri::generate_handler![
            add_todo,
            remove_todo,
            update_todo_status,
            get_all_todos,
            get_completed_todos
        ])
        .run(context) // Use the stored context
        .expect("error while running tauri application");
}


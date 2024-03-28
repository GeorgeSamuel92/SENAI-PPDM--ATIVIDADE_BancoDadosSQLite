import * as SQLite from 'expo-sqlite'

export const DatabaseConnection={
    getConnections: () => SQLite.openDatabase('meubanco.db')
}
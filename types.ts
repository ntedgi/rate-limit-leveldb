export interface LevelDBClient {
    put(key: String, value: any): Boolean
    del(key: String): Boolean
    get(key: String): any
}
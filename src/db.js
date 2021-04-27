class Db {
    static DIARY_MASTER_LIST_KEY = "DIARY"

    static saveOne(content) {
        var masterList = Db.localStorageHasItem(Db.DIARY_MASTER_LIST_KEY) ? localStorage.getItem(Db.DIARY_MASTER_LIST_KEY) : {}
        masterList[content["id"]] = content
    }

    static getAll() {
        return Db.localStorageHasItem(Db.DIARY_MASTER_LIST_KEY) ? localStorage.getItem(Db.DIARY_MASTER_LIST_KEY) : {}
    }

    static getOne(id) {
        var masterList = Db.localStorageHasItem(Db.DIARY_MASTER_LIST_KEY) ? localStorage.getItem(Db.DIARY_MASTER_LIST_KEY) : {}
        return masterList.getItem(id) ? masterList[id] : null
    }

    static localStorageHasItem(key) {
        return localStorage.getItem(key) !== null
    }
}

export default Db;

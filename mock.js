let users = {};

users["alex"] = { user: "alex", assets: { crypto: { btc: 0.056 }, metals: { gold: 50 }, fiat: { euro: 200 } } }
users["bob"] = { user: "bob", assets: { crypto: { btc: 0.004 }, metals: { gold: 5 }, fiat: { euro: 50 } } }
users["john"] = { user: "john", assets: { crypto: { btc: 0.153 }, metals: { gold: 86 }, fiat: { euro: 10 } } }
users["tom"] = { user: "tom", assets: { crypto: { btc: 0.0071 }, metals: { gold: 78 }, fiat: { euro: 2 } } }
users["ben"] = { user: "ben", assets: { crypto: { btc: 0.080 }, metals: { gold: 208 }, fiat: { euro: 63 } } }
users["robert"] = { user: "robert", assets: { crypto: { btc: 0.308 }, metals: { gold: 65 }, fiat: { euro: 380 } } }
users["james"] = { user: "james", assets: { crypto: { btc: 1.206 }, metals: { gold: 30 }, fiat: { euro: 2380 } } }
users["vaultoro"] = { user: "vaultoro", assets: { crypto: { btc: 25.385 }, metals: { gold: 100000 }, fiat: { euro: 1102630 } } }

module.exports.users = users

module.exports.rates = {
    btc: {
        gold: 0.00096
    }
}
let mock = require('./mock')

matchGoldToBTC = (order,cost) => {
    for(let user in mock.users){
        if(order.user != user){
            if(mock.users[user].assets.metals.gold >= order.buy.quantity){
                mock.users[user].assets.metals.gold -= order.buy.quantity
                mock.users[user].assets.crypto.btc += cost
                mock.users[order.user].assets.metals.gold += order.buy.quantity
                mock.users[order.user].assets.crypto.btc -= cost
                return
            }
        }
    }
    console.log("Order matching failed")
}

validateBTCOrder = (user,cost) => {
    return user.assets.crypto.btc >= cost
}

processAndMatchOrder = (order) => {
    if (order.buy.asset == "gold") {
        if (order.using === "btc") {
            let cost = mock.rates.btc.gold * order.buy.quantity
            let user = mock.users[order.user]

            console.log("\n\ncost...\n",cost)

            if (validateBTCOrder(user,cost)) {
                matchGoldToBTC(order,cost)
            } else {
                console.log("Not Enough btc.")
            }
        }
    }
}

function test() {
    let order = {
        user: "john",
        buy: {
            asset: "gold",
            quantity: 100
        },
        using: "btc"
    }
    console.log("before...\n",JSON.stringify(mock.users["ben"]))
    console.log(JSON.stringify(mock.users["john"]))
    processAndMatchOrder(order)
    console.log("\n\n\nafter...\n",JSON.stringify(mock.users["ben"]))
    console.log(JSON.stringify(mock.users["john"]))
}

test()
//Kilometer to Meter Convert
function kilometerToMeter(kilometer) {
    let meter = 1000 * kilometer;
    if (meter >= 0) {
        return meter;

    } else {
        return "Distance is never negative.";
    }
}
// let totalDistance = kilometerToMeter(5);
// console.log(totalDistance);

//Budget Calculator
function budgetCalculator(watch, mobile, laptop) {
    let perWatchPrice = 50;
    let perMobilePrice = 100;
    let perLaptopPrice = 500;

    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        let cost = watch * perWatchPrice + mobile * perMobilePrice + laptop * perLaptopPrice;
        return cost;
    } else {
        return "Item number is never negative";
    }
}
// let totalBudget = budgetCalculator(1, 1, 1);
// console.log(totalBudget);

/**
 Hotel Cost
First ten days cost 100
second ten days cost 80 
other days 50
 */
function hotelCost(days) {
    let totalCost = 0;
    if (days > 0) {
        if (days >= 1 && days <= 10) {
            totalCost = 100 * days;
        } else if (days >= 11 && days <= 20) {
            totalCost = 10 * 100 + (days - 10) * 80;
        } else {
            totalCost = 10 * 100 + 10 * 80 + (days - 20) * 50;
        }
        return totalCost;

    } else {
        return "Don't you want to stay in our hotel?";
    }
}
// let cost = hotelCost(23);
// console.log(cost);

//Mega Friend
function megaFriend(friends) {
    if (friends.length > 0) {
        let longestName = friends[0]
        let longestNameLength = longestName.length
        for (let i = 1; i < friends.length; i++) {
            if (longestNameLength < friends[i].length) {
                longestName = friends[i]
            }
        }
        return longestName
    } else {
        return "Don't you have friends? Please Enter Your friends name!"
    }
}

// let longestFriendName = megaFriend(["Mohammad Tasnim Ahmed", "Raysul Hasan Sumon", "Dulon Khanam", "Tanvin Hasan Ankon"])
// console.log(longestFriendName)
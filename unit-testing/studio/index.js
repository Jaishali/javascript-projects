
let launchcode = {
    organization : "nonprofit",
    executiveDirector :"Jeff",
    percentageCoolEmployees : "100",
    programOffered :["Lc101", "LaunchCode Women+", "CoderCamp"],
    launchcode: function(num){
        if(num % 2 === 0){
            return "Launch!";
        }
        else if(num % 3 === 0){
            return "Code!";
        }
        else if (num % 5 === 0){
            return "Rocks!";
        }
    }
};

module.exports = launchcode;


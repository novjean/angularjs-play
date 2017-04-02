(function () {
    var app = angular.module("ContactApp");

    app.service("AppDataServiceSvc", function (AppNameSvc) {
        this.name = AppNameSvc;
        this.author = "Novjean";
        this.company = "Nova Tech";
        this.builtDate = new Date().toDateString();
        this.version = 1;
    });
})();



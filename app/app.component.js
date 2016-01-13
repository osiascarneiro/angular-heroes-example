System.register(['angular2/core', './hero-detail.component', './hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_service_1;
    var AppComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of heroes';
                    this.heroes = HEROES;
                    this.hero = {
                        id: 1,
                        name: 'Windstorm'
                    };
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<h1>{{title}}</h1>\n    \t<h2>My Heroes</h2>\n    \t<ul class=\"heroes\">\n    \t\t<li *ngFor=\"#hero of heroes\"\n    \t\t\t[class.selected]=\"hero === selectedHero\"\n    \t\t\t(click)=\"onSelect(hero)\">\n    \t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    \t\t</li>\n    \t</ul>\n    \t<my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    ",
                        styles: [
                            ".selected {\n\t\t\t\tbackground-color: #CFD8DC !important;\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t\t.heroes {\n\t\t\t\tmargin: 0 0 2em 0;\n\t\t\t\tlist-style-type: none;\n\t\t\t\tpadding: 0;\n\t\t\t\twidth: 11em;\n\t\t\t}\n\t\t\t.heroes li {\n\t\t\t\tcursor: pointer;\n\t\t\t\tposition: relative;\n\t\t\t\tleft: 0;\n\t\t\t\tbackground-color: #EEE;\n\t\t\t\tmargin: .5em;\n\t\t\t\tpadding: .3em 0em;\n\t\t\t\theight: 1.6em;\n\t\t\t\tborder-radius: 4px;\n\t\t\t}\n\t\t\t.heroes li.selected:hover {\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t\t.heroes li:hover {\n\t\t\t\tcolor: #607D8B;\n\t\t\t\tbackground-color: #EEE;\n\t\t\t\tleft: .1em;\n\t\t\t}\n\t\t\t.heroes .text {\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -3px;\n\t\t\t}\n\t\t\t.heroes .badge {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: small;\n\t\t\t\tcolor: white;\n\t\t\t\tpadding: 0.8em 0.7em 0em 0.7em;\n\t\t\t\tbackground-color: #607D8B;\n\t\t\t\tline-height: 1em;\n\t\t\t\tposition: relative;\n\t\t\t\tleft: -1px;\n\t\t\t\ttop: -4px;\n\t\t\t\theight: 1.8em;\n\t\t\t\tmargin-right: .8em;\n\t\t\t\tborder-radius: 4px 0px 0px 4px;\n\t\t\t}\n"
                        ],
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
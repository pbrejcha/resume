Projects = new Meteor.Collection('projects');

if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault("counter", 0);

//  Template.hello.helpers({
//    counter: function () {
//      return Session.get("counter");
//    }
//  });

//  Template.hello.events({
//    'click button': function () {
//      // increment the counter when button is clicked
//      Session.set("counter", Session.get("counter") + 1);
//    }
//  });

    Router.map(function () {
        this.route('about');  // By default, path = '/about', template = 'about'
        this.route('home', {
            path: '/' //overrides the default '/home'
        });
        this.route('projects', {
            data: function () {return {projects: Projects.find()}}  //set template data context
        });
        this.route('project', {
            path: '/project/:_id',
            data: function () {return Projects.findOne({_id: this.params._id})},
            template: 'fullProject'
        });
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        if(Projects.findOne()){
            Projects.remove({});
        }
        var projects = [
            {
                title: 'Non-profit Hearing Aid Foundation - Mission Management Tool',
                date: 'June 2014 - October 2014',
                duties: [
                    'Complete rewrite of the Hearing Aid Foundation\'s patient and mission management tool including spreadsheet exporting and a modern Bootstrap interface',
                    'jQuery used for the user interface, jQuery modules managed by Require.JS',
                    'Server written with .NET MVC5 and .NET Web API'],
                env: 'jQuery, Require.JS, Bootstrap, .NET MVC 5, .NET Web API'
            },
            {
                title: 'Racr (personal project) - Race Management/Leaderboard Tool',
                date: 'February 2014 - Present',
                duties: [
                    'Creating an application to manage races among leagues, teams, and racers along with leaderboard capabilities',
                    'Node.JS server with the Express.JS framework',
                    'UI created with Bootstrap and Angular.JS'],
                env: 'Node.JS, Express.JS, Bootstrap, Angular.JS, MongoDB'
            },
            {
                title: 'Secure Call Provider - Next Generation Platform',
                date: 'March 2014 - June 2014',
                duties: [
                    'Created a next generation platform for providing secure video/phone communications between parties',
                    'Used Angular.JS to create a modular, modern interface',
                    'Utilized Scala on the Play Framework to provide asynchronous server support'],
                env: 'Angular.JS, Protractor.JS, Karma, Bootstrap, Scala, Play Framework'
            },
            {
                title: 'Legal Services Provider - Maintenance & Enhancements',
                date: 'January 2014 - February 2014',
                duties: [
                    'Supported and implemented new features in a legal docket/case management system',
                    'Client-side enghancements made using YUI 3',
                    'Server-side utilized Java on the Spring Framework'],
                env: 'Java, Spring Framework, Groovy, Spock test framework, YUI3, MySql'
            },
            {
                title: 'Legal Services Provider - Document Management',
                date: 'November 2013 - January 2014',
                duties: [
                    'Worked with one other developer to add document association features to the legal docket/case management system, wherein users are able to associate and download documents',
                    'YUI3, Java, Spring Framework'
                ],
                env: 'Java, Spring Framework, Groovy, Spock test framework, YUI3, MySql'
            },
            {
                title: 'National Drug Retailer - Data De-Identification Application',
                date: 'August 2013 - November 2013',
                duties: [
                    'Created a HIPAA-compliant PHI de-identification single-page application with administrative capabilities',
                    'Used Bootstrap and Angular.JS to create a rich UI',
                    'Utilized Java on the Spring Framework on the server'],
                env: 'Angular.JS, Bootstrap, Java, Spring Framework, Groovy, Spock test framework'
            },
            {
                title: 'Tasky - Project Management Tool',
                date: 'July 2013 - August 2013',
                duties: [
                    'Task management system for agile projects',
                    'Client UI utilized Backbone.JS and Blueprint css framework',
                    'Server created with .NET MVC 4'],
                env: 'Backbone.JS, Blueprint, .NET MVC 4'
            },
            {
                title: 'Cars.com - Careers Page',
                date: 'January 2013 - May 2013',
                duties: [
                    'Created a modern careers page under the Cars.com domain',
                    'Wrote an XML-to-JSON converter to transform the job data into usable format for the front-end of the application',
                    'Server written in Java on the Spring Framework'],
                env: 'Can.JS, Java, Spring Framework'
            }
        ];
        projects.forEach(function (project) {
            Projects.insert(project);
        })
    });
}

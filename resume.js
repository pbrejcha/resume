Projects = new Meteor.Collection('projects');

if (Meteor.isClient) {
    Router.configure({
        layoutTemplate: 'layout'
    });
    Router.map(function () {
        this.route('about', {
            path: '/'
        });
        this.route('work', {
            path: '/work'
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
                startDate: 'June 2014',
                endDate: 'October 2014',
                duties: [
                    'Complete rewrite of the Hearing Aid Foundation\'s patient and mission management tool including spreadsheet exporting and a modern Bootstrap interface',
                    'jQuery used for the user interface, jQuery modules managed by Require.JS',
                    'Server written with .NET MVC5 and .NET Web API'],
                env: 'jQuery, Require.JS, Bootstrap, .NET MVC 5, .NET Web API'
            },
            {
                title: 'Racr (personal project) - Race Management/Leaderboard Tool',
                startDate: 'February 2014',
                endDate: 'Present',
                duties: [
                    'Creating an application to manage races among leagues, teams, and racers along with leaderboard capabilities',
                    'Node.JS server with the Express.JS framework',
                    'UI created with Bootstrap and Angular.JS'],
                env: 'Node.JS, Express.JS, Bootstrap, Angular.JS, MongoDB'
            },
            {
                title: 'Secure Call Provider - Next Generation Platform',
                startDate: 'March 2014',
                endDate: 'June 2014',
                duties: [
                    'Created a next generation platform for providing secure video/phone communications between parties',
                    'Used Angular.JS to create a modular, modern interface',
                    'Utilized Scala on the Play Framework to provide asynchronous server support'],
                env: 'Angular.JS, Protractor.JS, Karma, Bootstrap, Scala, Play Framework'
            },
            {
                title: 'Legal Services Provider - Maintenance & Enhancements',
                startDate: 'January 2014',
                endDate: 'February 2014',
                duties: [
                    'Supported and implemented new features in a legal docket/case management system',
                    'Client-side enghancements made using YUI 3',
                    'Server-side utilized Java on the Spring Framework'],
                env: 'Java, Spring Framework, Groovy, Spock test framework, YUI3, MySql'
            },
            {
                title: 'Legal Services Provider - Document Management',
                startDate: 'November 2013',
                endDate: 'January 2014',
                duties: [
                    'Worked with one other developer to add document association features to the legal docket/case management system, wherein users are able to associate and download documents',
                    'YUI3, Java, Spring Framework'
                ],
                env: 'Java, Spring Framework, Groovy, Spock test framework, YUI3, MySql'
            },
            {
                title: 'National Drug Retailer - Data De-Identification Application',
                startDate: 'August 2013',
                endDate: 'November 2013',
                duties: [
                    'Created a HIPAA-compliant PHI de-identification single-page application with administrative capabilities',
                    'Used Bootstrap and Angular.JS to create a rich UI',
                    'Utilized Java on the Spring Framework on the server'],
                env: 'Angular.JS, Bootstrap, Java, Spring Framework, Groovy, Spock test framework'
            },
            {
                title: 'Tasky - Project Management Tool',
                startDate: 'July 2013',
                endDate: 'August 2013',
                duties: [
                    'Task management system for agile projects',
                    'Client UI utilized Backbone.JS and Blueprint css framework',
                    'Server created with .NET MVC 4'],
                env: 'Backbone.JS, Blueprint, .NET MVC 4'
            },
            {
                title: 'Cars.com - Careers Page',
                startDate: 'January 2013',
                endDate: 'May 2013',
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

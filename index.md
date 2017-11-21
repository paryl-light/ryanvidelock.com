---
layout: home
title: Web Developer and SEO Specialist Ryan Videlock
image: 
page_id: '1'
meta_title: Web Developer and SEO Specialist Ryan Videlock
meta_description: 
---
{% capture index %}{% include pages/index.md %}{% endcapture %}
{{ index | markdownify }}


<div class="projects-container">
    <h3>My projects</h3>
    <ul class="projects">
{% assign projects = site.data.projects  %}
{% for project in projects %}
        <li class="project-{{project.id}} project">
            <a href="{{project.link}}" target="_blank">
                <h4 class="project-title">{{project.name}}</h4>
                <span class="project-description">
                    <span>
                        {{project.description}}
                        <img src="/assets/img/{{project.image}}" alt="{{project.alt}}" title="{{project.title}}" />
                    </span>
                </span>
            </a>
        </li>
{%endfor%}
    </ul>
</div>


### My Skills
<div class="skills">
    <ul class="general-skills">
{% assign generalSkills = site.data.skills | where, "category", "general"  %}
{% for skill in generalSkills %}
    <li class="general-skill-{{skill.id}} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <div class="skill-stars">
            {% for counter in (1..skill.level) %}
                <span>★</span>
            {% endfor %}
            {% assign leftoverSkill = 5 | minus: skill.level %}
            {% for counter in (1..leftoverSkill) %}
                <span>☆</span>
            {% endfor %}
        </div>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{%endfor%}
</ul>
    <ul class="webDevelopment-skills">
{% assign webDevelopment = site.data.skills | where, "category", "webDevelopment"  %}
{% for skill in webDevelopment %}
    <li class="webDevelopment-skill-{{skill.id}} skill" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
        <h4 class="skill-title">{{skill.name}}</h4>
        <div class="skill-stars">
            {% for counter in (1..skill.level) %}
                <span>★</span>
            {% endfor %}
            {% assign leftoverSkill = 5 | minus: skill.level %}
            {% for counter in (1..leftoverSkill) %}
                <span>☆</span>
            {% endfor %}
        </div>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{%endfor%}
</ul>
<ul class="operatingSystem-skills">
{% assign operatingSystem = site.data.skills | where, "category", "operatingSystem"  %}
{% for skill in operatingSystem %}
    <li class="operatingSystem-skill-{{skill.id}} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <div class="skill-stars">
            {% for counter in (1..skill.level) %}
                <span>★</span>
            {% endfor %}
            {% assign leftoverSkill = 5 | minus: skill.level %}
            {% for counter in (1..leftoverSkill) %}
                <span>☆</span>
            {% endfor %}
        </div>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{% endfor %}
</ul>
<ul class="developmentSoftware-skills">
{% assign developmentSoftware = site.data.skills | where, "category", "developmentSoftware"  %}
{% for skill in developmentSoftware %}
    <li class="developmentSoftware-skill-{{skill.id}} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <div class="skill-stars">
            {% for counter in (1..skill.level) %}
                <span>★</span>
            {% endfor %}
            {% assign leftoverSkill = 5 | minus: skill.level %}
            {% for counter in (1..leftoverSkill) %}
                <span>☆</span>
            {% endfor %}
        </div>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{% endfor %}
</ul>
</div>

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

### What kind of skills you can expect from me
<div class="skills">
    <ul class="general-skills">
{% assign generalSkills = site.data.skills | where, "category", "general"  %}
{% for skill in generalSkills %}
    <li class="general-skill-{{skill.id}} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{%endfor%}
</ul>
    <ul class="webDevelopment-skills">
{% assign webDevelopment = site.data.skills | where, "category", "webDevelopment"  %}
{% for skill in webDevelopment %}
    <li class="webDevelopment-skill-{{skill.id}} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{%endfor%}
</ul>
<ul class="operatingSystem-skills">
{% assign operatingSystem = site.data.skills | where, "category", "operatingSystem"  %}
{% for skill in operatingSystem %}
    <li class="operatingSystem-skill-{{skill.id}} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{% endfor %}
</ul>
<ul class="developmentSoftware-skills">
{% assign developmentSoftware = site.data.skills | where, "category", "developmentSoftware"  %}
{% for skill in developmentSoftware %}
    <li class="developmentSoftware-skill-{{skill.id}} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{% endfor %}
</ul>
</div>

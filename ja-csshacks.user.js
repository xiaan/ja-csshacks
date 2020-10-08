// ==UserScript==
// @name         Jira Align CSS Hacks
// @namespace    http://xiaan.com/
// @version      0.2
// @description  Usability improvements for Jira Align
// @author       xiaan
// @copyright    2020, Christiaan van Woudenberg
// @license      MIT
// @match        *://maxar.agilecraft.com/*
// @match        *://maxar.jiraalign.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Make search results wider
    GM_addStyle('.global-search-wrapper .search-results-container { min-width:600px; max-width:600px; }')

    // Make feature grid more compact, unhide column data
    GM_addStyle('.new-table .Generic, .new-table .GenericCenter, .new-table .GenericExpanded, .new-table .HeadSortC, .new-table .HeadSortDesc, .new-table .HeadSortL, .new-table .acceptancegridacowner, .new-table .acceptancegridautomation, .new-table .acceptancegridid, .new-table .acceptancegriditeration, .new-table .acceptancegridname, .new-table .acceptancegridowner, .new-table .acceptancegridstatus, .new-table .acceptancegridstory, .new-table .acceptancegridwarningiconsmall, .new-table .blocked, .new-table .blockerchat, .new-table .blockercreatedate, .new-table .blockername, .new-table .blockerowner, .new-table .blockerpriority, .new-table .blockerrelease, .new-table .blockerstatus, .new-table .blockerstory, .new-table .chat, .new-table .default, .new-table .defectsgridfixedin, .new-table .defectsgridfoundby, .new-table .defectsgridfoundon, .new-table .defectsgridid, .new-table .defectsgridname, .new-table .defectsgridpriority, .new-table .defectsgridseverity, .new-table .defectsgridstate, .new-table .defectsgridstatus, .new-table .defectsgridstory, .new-table .defectsgridwarningiconsmall, .new-table .description, .new-table .extId, .new-table .externalId, .new-table .global-padding, .new-table .griddriver, .new-table .gridest, .new-table .gridheader, .new-table .gridheader_select, .new-table .gridheaderleft, .new-table .gridparent, .new-table .gridpriority, .new-table .gridrowrightsidetext, .new-table .gridstatus, .new-table .health, .new-table .icon-small, .new-table .id, .new-table .iteration, .new-table .milestoneactiongridcreatedate, .new-table .milestoneactiongridname, .new-table .milestoneactiongridowner, .new-table .milestoneactiongridrelease, .new-table .milestoneactiongridstatus, .new-table .milestonegridblocked, .new-table .milestonegridid, .new-table .milestonegriditeration, .new-table .milestonegridname, .new-table .milestonegridprogram, .new-table .milestonegridrelease, .new-table .milestonegridstate, .new-table .milestonegridteam, .new-table .milestonegridtier, .new-table .number, .new-table .object-items, .new-table .object-name, .new-table .owner, .new-table .portfoliodescription, .new-table .portfolioname, .new-table .portfolioparentorg, .new-table .portfoliprocess, .new-table .priority, .new-table .programgroup, .new-table .projectgridbegindate, .new-table .projectgridenddate, .new-table .projectgridid, .new-table .projectgridplanningcycle, .new-table .projectgridreleasenumber, .new-table .projectgridstatus, .new-table .projectgridtestsuite, .new-table .qaStoryState, .new-table .release, .new-table .release-vehicles, .new-table .sel, .new-table .shortname, .new-table .sort, .new-table .state, .new-table .status, .new-table .storymapgriddescription, .new-table .storymapgridname, .new-table .storymapgridrelease, .new-table .storymapgridtier, .new-table .storymapgridviewmap, .new-table .storymapgridwarningiconsmall, .new-table .taskstoryName, .new-table .team, .new-table .teamdescription, .new-table .teamleads, .new-table .teamname, .new-table .tests, .new-table .title, .new-table .title2, .new-table .trace, .new-table .type, .new-table .weeks, .new-table th { padding: 4px 8px!important }')
    GM_addStyle('.new-table .blockername, .new-table .milestoneactiongridname, .new-table .milestonegridname, .new-table .projectgridplanningcycle, .new-table .storymapgridname, .new-table .title, .new-table .title2 { max-width: none; width: auto; }')
    GM_addStyle('.new-table .Generic { max-width: none!important; width:auto; }')
    GM_addStyle('.new-table .sel, .new-table .warningIconSmall { width:20px!important; }')
    GM_addStyle('.new-table .HeadSortC font { display:inline-block; max-width:50px; overflow:hidden; text-overflow: ellipsis; }')
    GM_addStyle('.new-table tr.header-row td[title] font { display:none; }')
    GM_addStyle('.new-table .acceptancegridid, .new-table .defectsgridid, .new-table .id { min-width: none!important; width:20px!important; }')

    // Make story grid more compact, unhide column data
    GM_addStyle('.new-table tr.header-row td font.select-all-title { display:none; }')
    GM_addStyle('#storyGridPage .GenericCenter { max-width: 400px!important; }')
    GM_addStyle('.new-table .defectsgridstate, .new-table .milestonegridstate, .new-table .state { width:20px; }')

    // Make Team Room Kanban Board items taller
    GM_addStyle('.tr-kanban-content { height: 56px; }')
    GM_addStyle('.tr-kanban-content p { -webkit-line-clamp: unset; width:120px; height:82px; }')
    GM_addStyle('.tr-kanban-img, .teamroom-container .sprint-board-container .sprint-board .sprint-board-row .sprint-board-card .cardText .actions-button { margin: 0 0 0 -25px; }')
    GM_addStyle('.teamroom-container .sprint-board-container .card-data { margin: 48px 0 0 -25px; }')
    GM_addStyle('.cardText { height:100px!important; }')
})();

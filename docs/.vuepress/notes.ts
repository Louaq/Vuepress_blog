import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
const stackNote = defineNoteConfig({
  dir: 'stack',
  link: '/stack',
  sidebar: ['', 'day1', 'day2'],
})
const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})


export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote,stackNote],                
})

import { HomeAssistant } from "custom-card-helpers"

export interface SprinklersCardConfig {
  title?: string
  colTitles?: string[]
  general: {
    switch: string
    multi: string
  }
  valves: ValveEntry[]
}

export interface ValveEntry {
  name: string
  duration: string
  enabled: string
  switch: string
}

export interface IdTsMap {
  [id: string]: number
}

export interface EntityHistoryEntry {
  s: string
  lu: number
}

export interface ExtendedHomeAssistant extends HomeAssistant {
  entities: {
    [k: string]: {
      entity_id: string
      name?: string
    }
  }
}

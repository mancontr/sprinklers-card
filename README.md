# Sprinklers Card

A custom card to manage ESPHome's Sprinkler controllers from your Home Assistant.

## Setup

We recommend using HACS:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=mancontr&repository=sprinklers-card&category=plugin)

## Usage

If you don't have it yet, start by configuring your [Sprinkler Controller](https://esphome.io/components/sprinkler.html) with ESPHome.

To add the card to a panel, add a custom YML card with something like this:

```yaml
type: custom:sprinklers-card
title: Irrigation
general:
  switch: switch.sprinklers_sprinklers
  multi: number.sprinklers_sprinklers_multiplier
valves:
  - name: Zone 1
    duration: number.sprinklers_zone_1_duration
    enabled: switch.sprinklers_zone_1_enabled
    switch: switch.sprinklers_zone_1
  - name: Zone 2
    duration: number.sprinklers_zone_2_duration
    enabled: switch.sprinklers_zone_2_enabled
    switch: switch.sprinklers_zone_2
```

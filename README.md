
# Homebridge IP Device Plugin

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Apache_2.0-orange.svg)

## Beschreibung

Dies ist ein Homebridge-Plugin, das die Integration von IP-Geräten in Ihr Homebridge-System ermöglicht. Es ermöglicht die Steuerung und Überwachung von Geräten über eine IP-Adresse, und optional mit Benutzername und Passwort für die Authentifizierung.

## Installation

Bevor Sie dieses Plugin installieren, stellen Sie sicher, dass Sie Homebridge bereits eingerichtet haben.

1. Installieren Sie das Plugin über npm:

   ```bash
   npm install -g homebridge-ip-device
Fügen Sie die Konfiguration zu Ihrer config.json-Datei hinzu:

````json
*you can config with ui*
````
Stellen Sie sicher, dass Sie die Konfiguration an Ihre Anforderungen anpassen.

Konfiguration
Feld	Beschreibung
platform	Muss auf "homebridge-ip-device" gesetzt sein.
name	Ein Name für die Plattform.
serverIP	Die IP-Adresse Ihres Servers.
username	Optionaler Benutzername für die Authentifizierung.
password	Optional das Passwort für die Authentifizierung.


## Problemlösung
Wiki (Bald verfügbar)


## Lizenz
Dieses Plugin ist unter der Apache 2.0-Lizenz veröffentlicht.


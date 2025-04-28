# Simple Discord Bot

Ein einfacher Discord Bot mit Basis-Befehlen.

## Systemanforderungen

- Node.js (Version 18.0.0 oder höher)
- npm (Node Package Manager)
- Discord Account & Bot Token
- Internetverbindung

## Discord Bot Einrichtung

1. Erstelle einen Bot auf [Discord Developer Portal](https://discord.com/developers/applications)
2. Aktiviere die folgenden Bot-Berechtigungen:
   - MESSAGE CONTENT INTENT
   - SERVER MEMBERS INTENT
   - PRESENCE INTENT
3. Kopiere den Bot Token

falls du immer noch Hilfe benötigst
https://www.writebots.com/discord-bot-token/


## Installation

1. Entpacke den Ordner
2. Öffne CMD im Projektordner
3. Führe aus:
```bash
npm install
```

## Konfiguration

Bearbeite die `config.json`:
- `token`: Füge deinen Bot-Token ein
- `prefix`: Ändere den Befehlsprefix (Standard: ??)

## Start

Starte den Bot:
```bash
npm start
```

## Befehle

- `??help` - Zeigt alle Befehle
- `??ping` - Testet den Bot
- `??avatar` - Zeigt Benutzeravatar
- `??server` - Zeigt Serverinfos
- `??userinfo` - Zeigt Benutzerinfos

## Fehlerbehebung

- Stelle sicher, dass Node.js korrekt installiert ist: `node --version`
- Überprüfe die Bot-Berechtigungen im Discord Developer Portal
- Kontrolliere, ob der Bot-Token in der config.json korrekt ist

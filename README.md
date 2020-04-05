[![Build Status](https://travis-ci.com/lpcruz/dev-note.svg?branch=master)](https://travis-ci.com/lpcruz/dev-note)
# dev-journal

A node binary that auto-generates notes for you in markdown. 

#### Installation

```
$ npm install -g dev-journal
```

#### Making a note

Once you've successfully installed globally, you'll have access to the `dev-note` binary command. It will create a `journal` directory in your current working directory along with a markdown file with the current date:

```
cwd/
├── journal/
    ├── <MM-DD-YYYY>.md
```

The markdown file will already have a template with the current date:

```
### Notes <MM-DD-YYYY>
========================
```
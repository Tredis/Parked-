// 'use strict';

// // Require our models. Running each module registers the model into sequelize
// // so any other part of the application could call sequelize.model('Song')
// // to get access to the Song model.
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		isEmail: true,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING
	}	
})

const Segment = db.define('segment', {
	lat1: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	long1: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	lat2: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	long2: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	desc: {
		type: Sequelize.TEXT,
		allowNull: true
	},
  },
  {
    timestamps: false
  })

// const Playlist = require('./playlist');
// const Artist = require('./artist');
// const Album = require('./album');
// const Song = require('./song');

// // Form the associations

// Song.belongsTo(Album);
// Album.hasMany(Song);
// Album.belongsTo(Artist); // "Album Artist" is a thing, even if there are
//                          // other artists on the album.


// Artist.belongsToMany(Song, { through: 'artistSong' });
// Song.belongsToMany(Artist, { through: 'artistSong' });

// Song.belongsToMany(Playlist, { through: 'playlistSong' });
// Playlist.belongsToMany(Song, { through: 'playlistSong' });

// // exported just in case, but can also be fetched via db.model('Album') etc.

module.exports = {
  User: User,
  Segment: Segment
};

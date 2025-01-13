const available_markets = [
	'AR',
	'AU',
	'AT',
	'BE',
	'BO',
	'BR',
	'BG',
	'CA',
	'CL',
	'CO',
	'CR',
	'CY',
	'CZ',
	'DK',
	'DO',
	'DE',
	'EC',
	'EE',
	'SV',
	'FI',
	'FR',
	'GR',
	'GT',
	'HN',
	'HK',
	'HU',
	'IS',
	'IE',
	'IT',
	'LV',
	'LT',
	'LU',
	'MY',
	'MT',
	'MX',
	'NL',
	'NZ',
	'NI',
	'NO',
	'PA',
	'PY',
	'PE',
	'PH',
	'PL',
	'PT',
	'SG',
	'SK',
	'ES',
	'SE',
	'CH',
	'TW',
	'TR',
	'UY',
	'US',
	'GB',
	'AD',
	'LI',
	'MC',
	'ID',
	'JP',
	'TH',
	'VN',
	'RO',
	'IL',
	'ZA',
	'SA',
	'AE',
	'BH',
	'QA',
	'OM',
	'KW',
	'EG',
	'MA',
	'DZ',
	'TN',
	'LB',
	'JO',
	'PS',
	'IN',
	'KZ',
	'MD',
	'UA',
	'AL',
	'BA',
	'HR',
	'ME',
	'MK',
	'RS',
	'SI',
	'KR',
	'BD',
	'PK',
	'LK',
	'GH',
	'KE',
	'NG',
	'TZ',
	'UG',
	'AG',
	'AM',
	'BS',
	'BB',
	'BZ',
	'BT',
	'BW',
	'BF',
	'CV',
	'CW',
	'DM',
	'FJ',
	'GM',
	'GE',
	'GD',
	'GW',
	'GY',
	'HT',
	'JM',
	'KI',
	'LS',
	'LR',
	'MW',
	'MV',
	'ML',
	'MH',
	'FM',
	'NA',
	'NR',
	'NE',
	'PW',
	'PG',
	'PR',
	'WS',
	'SM',
	'ST',
	'SN',
	'SC',
	'SL',
	'SB',
	'KN',
	'LC',
	'VC',
	'SR',
	'TL',
	'TO',
	'TT',
	'TV',
	'VU',
	'AZ',
	'BN',
	'BI',
	'KH',
	'CM',
	'TD',
	'KM',
	'GQ',
	'SZ',
	'GA',
	'GN',
	'KG',
	'LA',
	'MO',
	'MR',
	'MN',
	'NP',
	'RW',
	'TG',
	'UZ',
	'ZW',
	'BJ',
	'MG',
	'MU',
	'MZ',
	'AO',
	'CI',
	'DJ',
	'ZM',
	'CD',
	'CG',
	'IQ',
	'LY',
	'TJ',
	'VE',
	'ET',
	'XK',
];

export const searchForAlbum = {
	albums: {
		href: 'https://api.spotify.com/v1/search?offset=0&limit=2&query=From%20Xero&type=album&locale=en-GB,en-US;q%3D0.9,en;q%3D0.8',
		limit: 2,
		next: 'https://api.spotify.com/v1/search?offset=2&limit=2&query=From%20Xero&type=album&locale=en-GB,en-US;q%3D0.9,en;q%3D0.8',
		offset: 0,
		previous: null,
		total: 787,
		items: [
			{
				album_type: 'album',
				total_tracks: 11,
				available_markets,
				external_urls: {
					spotify: 'https://open.spotify.com/album/4R6FV9NSzhPihHR0h4pI93',
				},
				href: 'https://api.spotify.com/v1/albums/4R6FV9NSzhPihHR0h4pI93',
				id: '4R6FV9NSzhPihHR0h4pI93',
				images: [
					{
						height: 640,
						url: 'https://i.scdn.co/image/ab67616d0000b273b11a5489e8cb11dd22b930a0',
						width: 640,
					},
					{
						height: 300,
						url: 'https://i.scdn.co/image/ab67616d00001e02b11a5489e8cb11dd22b930a0',
						width: 300,
					},
					{
						height: 64,
						url: 'https://i.scdn.co/image/ab67616d00004851b11a5489e8cb11dd22b930a0',
						width: 64,
					},
				],
				name: 'From Zero',
				release_date: '2024-11-15',
				release_date_precision: 'day',
				type: 'album',
				uri: 'spotify:album:4R6FV9NSzhPihHR0h4pI93',
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
			},
			{
				album_type: 'single',
				total_tracks: 3,
				available_markets: [
					...available_markets.slice(0, 79),
					'BY',
					...available_markets.slice(79),
				],
				external_urls: {
					spotify: 'https://open.spotify.com/album/5v5KesD6W6Ptlid6iyGxSq',
				},
				href: 'https://api.spotify.com/v1/albums/5v5KesD6W6Ptlid6iyGxSq',
				id: '5v5KesD6W6Ptlid6iyGxSq',
				images: [
					{
						height: 640,
						url: 'https://i.scdn.co/image/ab67616d0000b273b554768192043c597c31133a',
						width: 640,
					},
					{
						height: 300,
						url: 'https://i.scdn.co/image/ab67616d00001e02b554768192043c597c31133a',
						width: 300,
					},
					{
						height: 64,
						url: 'https://i.scdn.co/image/ab67616d00004851b554768192043c597c31133a',
						width: 64,
					},
				],
				name: 'From Xero',
				release_date: '2021-11-15',
				release_date_precision: 'day',
				type: 'album',
				uri: 'spotify:album:5v5KesD6W6Ptlid6iyGxSq',
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/1EGVsuJeCpKQf69Io9kz1T',
						},
						href: 'https://api.spotify.com/v1/artists/1EGVsuJeCpKQf69Io9kz1T',
						id: '1EGVsuJeCpKQf69Io9kz1T',
						name: 'HJY',
						type: 'artist',
						uri: 'spotify:artist:1EGVsuJeCpKQf69Io9kz1T',
					},
				],
			},
		],
	},
};

export const getNewReleases = {
	albums: {
		href: 'https://api.spotify.com/v1/browse/new-releases?offset=0&limit=2&locale=en-GB,en-US;q%3D0.9,en;q%3D0.8',
		items: [
			{
				album_type: 'album',
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/3eVa5w3URK5duf6eyVDbu9',
						},
						href: 'https://api.spotify.com/v1/artists/3eVa5w3URK5duf6eyVDbu9',
						id: '3eVa5w3URK5duf6eyVDbu9',
						name: 'ROSÉ',
						type: 'artist',
						uri: 'spotify:artist:3eVa5w3URK5duf6eyVDbu9',
					},
				],
				available_markets: available_markets.filter((market) => market !== 'KR'),
				external_urls: {
					spotify: 'https://open.spotify.com/album/7kFyd5oyJdVX2pIi6P4iHE',
				},
				href: 'https://api.spotify.com/v1/albums/7kFyd5oyJdVX2pIi6P4iHE',
				id: '7kFyd5oyJdVX2pIi6P4iHE',
				images: [
					{
						height: 300,
						url: 'https://i.scdn.co/image/ab67616d00001e025074bd0894cb1340b8d8a678',
						width: 300,
					},
					{
						height: 64,
						url: 'https://i.scdn.co/image/ab67616d000048515074bd0894cb1340b8d8a678',
						width: 64,
					},
					{
						height: 640,
						url: 'https://i.scdn.co/image/ab67616d0000b2735074bd0894cb1340b8d8a678',
						width: 640,
					},
				],
				name: 'rosie',
				release_date: '2024-12-06',
				release_date_precision: 'day',
				total_tracks: 12,
				type: 'album',
				uri: 'spotify:album:7kFyd5oyJdVX2pIi6P4iHE',
			},
			{
				album_type: 'album',
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/2FXC3k01G6Gw61bmprjgqS',
						},
						href: 'https://api.spotify.com/v1/artists/2FXC3k01G6Gw61bmprjgqS',
						id: '2FXC3k01G6Gw61bmprjgqS',
						name: 'Hozier',
						type: 'artist',
						uri: 'spotify:artist:2FXC3k01G6Gw61bmprjgqS',
					},
				],
				available_markets: ['AU', 'CA', 'PR', 'US'],
				external_urls: {
					spotify: 'https://open.spotify.com/album/10MWtR7jwqRTLQAvmTU7uQ',
				},
				href: 'https://api.spotify.com/v1/albums/10MWtR7jwqRTLQAvmTU7uQ',
				id: '10MWtR7jwqRTLQAvmTU7uQ',
				images: [
					{
						height: 300,
						url: 'https://i.scdn.co/image/ab67616d00001e028044f38f15837e87e2b65222',
						width: 300,
					},
					{
						height: 64,
						url: 'https://i.scdn.co/image/ab67616d000048518044f38f15837e87e2b65222',
						width: 64,
					},
					{
						height: 640,
						url: 'https://i.scdn.co/image/ab67616d0000b2738044f38f15837e87e2b65222',
						width: 640,
					},
				],
				name: 'Unreal Unearth: Unending',
				release_date: '2024-12-06',
				release_date_precision: 'day',
				total_tracks: 26,
				type: 'album',
				uri: 'spotify:album:10MWtR7jwqRTLQAvmTU7uQ',
			},
		],
		limit: 2,
		next: 'https://api.spotify.com/v1/browse/new-releases?offset=2&limit=2&locale=en-GB,en-US;q%3D0.9,en;q%3D0.8',
		offset: 0,
		previous: null,
		total: 100,
	},
};

export const getAlbumTracks = {
	href: 'https://api.spotify.com/v1/albums/4R6FV9NSzhPihHR0h4pI93/tracks?offset=0&limit=20',
	items: [
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 22174,
			explicit: false,
			external_urls: {
				spotify: 'https://open.spotify.com/track/1uhces29ApKuQWFdpiUsvH',
			},
			href: 'https://api.spotify.com/v1/tracks/1uhces29ApKuQWFdpiUsvH',
			id: '1uhces29ApKuQWFdpiUsvH',
			name: 'From Zero (Intro)',
			preview_url: null,
			track_number: 1,
			type: 'track',
			uri: 'spotify:track:1uhces29ApKuQWFdpiUsvH',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 190427,
			explicit: true,
			external_urls: {
				spotify: 'https://open.spotify.com/track/1EDPVGbyPKJPeGqATwXZvN',
			},
			href: 'https://api.spotify.com/v1/tracks/1EDPVGbyPKJPeGqATwXZvN',
			id: '1EDPVGbyPKJPeGqATwXZvN',
			name: 'The Emptiness Machine',
			preview_url: null,
			track_number: 2,
			type: 'track',
			uri: 'spotify:track:1EDPVGbyPKJPeGqATwXZvN',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 228606,
			explicit: false,
			external_urls: {
				spotify: 'https://open.spotify.com/track/5mFZipkX1HZ4Idz5LOWpzq',
			},
			href: 'https://api.spotify.com/v1/tracks/5mFZipkX1HZ4Idz5LOWpzq',
			id: '5mFZipkX1HZ4Idz5LOWpzq',
			name: 'Cut the Bridge',
			preview_url: null,
			track_number: 3,
			type: 'track',
			uri: 'spotify:track:5mFZipkX1HZ4Idz5LOWpzq',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 167012,
			explicit: false,
			external_urls: {
				spotify: 'https://open.spotify.com/track/2HBBM75Xv3o2Mqdyh1NcM0',
			},
			href: 'https://api.spotify.com/v1/tracks/2HBBM75Xv3o2Mqdyh1NcM0',
			id: '2HBBM75Xv3o2Mqdyh1NcM0',
			name: 'Heavy Is the Crown',
			preview_url: null,
			track_number: 4,
			type: 'track',
			uri: 'spotify:track:2HBBM75Xv3o2Mqdyh1NcM0',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 170445,
			explicit: false,
			external_urls: {
				spotify: 'https://open.spotify.com/track/3k4gjmYNJugQRlh2aounZ9',
			},
			href: 'https://api.spotify.com/v1/tracks/3k4gjmYNJugQRlh2aounZ9',
			id: '3k4gjmYNJugQRlh2aounZ9',
			name: 'Over Each Other',
			preview_url: null,
			track_number: 5,
			type: 'track',
			uri: 'spotify:track:3k4gjmYNJugQRlh2aounZ9',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 140915,
			explicit: false,
			external_urls: {
				spotify: 'https://open.spotify.com/track/7BkzAHnNW7WfrT4NcLaUDx',
			},
			href: 'https://api.spotify.com/v1/tracks/7BkzAHnNW7WfrT4NcLaUDx',
			id: '7BkzAHnNW7WfrT4NcLaUDx',
			name: 'Casualty',
			preview_url: null,
			track_number: 6,
			type: 'track',
			uri: 'spotify:track:7BkzAHnNW7WfrT4NcLaUDx',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 211027,
			explicit: false,
			external_urls: {
				spotify: 'https://open.spotify.com/track/7diOv6wm3ngF7Vt6ubK0Sf',
			},
			href: 'https://api.spotify.com/v1/tracks/7diOv6wm3ngF7Vt6ubK0Sf',
			id: '7diOv6wm3ngF7Vt6ubK0Sf',
			name: 'Overflow',
			preview_url: null,
			track_number: 7,
			type: 'track',
			uri: 'spotify:track:7diOv6wm3ngF7Vt6ubK0Sf',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 183584,
			explicit: false,
			external_urls: {
				spotify: 'https://open.spotify.com/track/6i5qhmmF9UNUBRyrPSGn4m',
			},
			href: 'https://api.spotify.com/v1/tracks/6i5qhmmF9UNUBRyrPSGn4m',
			id: '6i5qhmmF9UNUBRyrPSGn4m',
			name: 'Two Faced',
			preview_url: null,
			track_number: 8,
			type: 'track',
			uri: 'spotify:track:6i5qhmmF9UNUBRyrPSGn4m',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 185414,
			explicit: false,
			external_urls: {
				spotify: 'https://open.spotify.com/track/0J1IJsMbKWb5g2sJArTkGF',
			},
			href: 'https://api.spotify.com/v1/tracks/0J1IJsMbKWb5g2sJArTkGF',
			id: '0J1IJsMbKWb5g2sJArTkGF',
			name: 'Stained',
			preview_url: null,
			track_number: 9,
			type: 'track',
			uri: 'spotify:track:0J1IJsMbKWb5g2sJArTkGF',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 209083,
			explicit: false,
			external_urls: {
				spotify: 'https://open.spotify.com/track/7M8eZBRTD9QNasEVReEM0H',
			},
			href: 'https://api.spotify.com/v1/tracks/7M8eZBRTD9QNasEVReEM0H',
			id: '7M8eZBRTD9QNasEVReEM0H',
			name: 'IGYEIH',
			preview_url: null,
			track_number: 10,
			type: 'track',
			uri: 'spotify:track:7M8eZBRTD9QNasEVReEM0H',
			is_local: false,
		},
		{
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
					},
					href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
					id: '6XyY86QOPPrYVGvF9ch6wz',
					name: 'Linkin Park',
					type: 'artist',
					uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
				},
			],
			available_markets,
			disc_number: 1,
			duration_ms: 209844,
			explicit: true,
			external_urls: {
				spotify: 'https://open.spotify.com/track/6aCBjSb87RizdH8lVBIRW7',
			},
			href: 'https://api.spotify.com/v1/tracks/6aCBjSb87RizdH8lVBIRW7',
			id: '6aCBjSb87RizdH8lVBIRW7',
			name: 'Good Things Go',
			preview_url: null,
			track_number: 11,
			type: 'track',
			uri: 'spotify:track:6aCBjSb87RizdH8lVBIRW7',
			is_local: false,
		},
	],
	limit: 20,
	next: null,
	offset: 0,
	previous: null,
	total: 11,
};

export const getArtist = {
	external_urls: {
		spotify: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
	},
	followers: {
		href: null,
		total: 8063570,
	},
	genres: ['alternative rock', 'modern rock', 'permanent wave', 'rock'],
	href: 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI?locale=en-GB%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8',
	id: '12Chz98pHFMPJEknJQMWvI',
	images: [
		{
			url: 'https://i.scdn.co/image/ab6761610000e5eb0accbbe13e1aa147dd27671c',
			height: 640,
			width: 640,
		},
		{
			url: 'https://i.scdn.co/image/ab676161000051740accbbe13e1aa147dd27671c',
			height: 320,
			width: 320,
		},
		{
			url: 'https://i.scdn.co/image/ab6761610000f1780accbbe13e1aa147dd27671c',
			height: 160,
			width: 160,
		},
	],
	name: 'Muse',
	popularity: 77,
	type: 'artist',
	uri: 'spotify:artist:12Chz98pHFMPJEknJQMWvI',
};

export const getAlbum = {
	album_type: 'album',
	total_tracks: 11,
	available_markets,
	external_urls: {
		spotify: 'https://open.spotify.com/album/4R6FV9NSzhPihHR0h4pI93',
	},
	href: 'https://api.spotify.com/v1/albums/4R6FV9NSzhPihHR0h4pI93',
	id: '4R6FV9NSzhPihHR0h4pI93',
	images: [
		{
			url: 'https://i.scdn.co/image/ab67616d0000b273b11a5489e8cb11dd22b930a0',
			height: 640,
			width: 640,
		},
		{
			url: 'https://i.scdn.co/image/ab67616d00001e02b11a5489e8cb11dd22b930a0',
			height: 300,
			width: 300,
		},
		{
			url: 'https://i.scdn.co/image/ab67616d00004851b11a5489e8cb11dd22b930a0',
			height: 64,
			width: 64,
		},
	],
	name: 'From Zero',
	release_date: '2024-11-15',
	release_date_precision: 'day',
	type: 'album',
	uri: 'spotify:album:4R6FV9NSzhPihHR0h4pI93',
	artists: [
		{
			external_urls: {
				spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
			},
			href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
			id: '6XyY86QOPPrYVGvF9ch6wz',
			name: 'Linkin Park',
			type: 'artist',
			uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
		},
	],
	tracks: {
		href: 'https://api.spotify.com/v1/albums/4R6FV9NSzhPihHR0h4pI93/tracks',
		limit: 50,
		next: null,
		offset: 0,
		previous: null,
		total: 11,
		items: [
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 22174,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/1uhces29ApKuQWFdpiUsvH',
				},
				href: 'https://api.spotify.com/v1/tracks/1uhces29ApKuQWFdpiUsvH',
				id: '1uhces29ApKuQWFdpiUsvH',
				name: 'From Zero (Intro)',
				preview_url: null,
				track_number: 1,
				type: 'track',
				uri: 'spotify:track:1uhces29ApKuQWFdpiUsvH',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 190427,
				explicit: true,
				external_urls: {
					spotify: 'https://open.spotify.com/track/1EDPVGbyPKJPeGqATwXZvN',
				},
				href: 'https://api.spotify.com/v1/tracks/1EDPVGbyPKJPeGqATwXZvN',
				id: '1EDPVGbyPKJPeGqATwXZvN',
				name: 'The Emptiness Machine',
				preview_url: null,
				track_number: 2,
				type: 'track',
				uri: 'spotify:track:1EDPVGbyPKJPeGqATwXZvN',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 228606,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/5mFZipkX1HZ4Idz5LOWpzq',
				},
				href: 'https://api.spotify.com/v1/tracks/5mFZipkX1HZ4Idz5LOWpzq',
				id: '5mFZipkX1HZ4Idz5LOWpzq',
				name: 'Cut the Bridge',
				preview_url: null,
				track_number: 3,
				type: 'track',
				uri: 'spotify:track:5mFZipkX1HZ4Idz5LOWpzq',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 167012,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/2HBBM75Xv3o2Mqdyh1NcM0',
				},
				href: 'https://api.spotify.com/v1/tracks/2HBBM75Xv3o2Mqdyh1NcM0',
				id: '2HBBM75Xv3o2Mqdyh1NcM0',
				name: 'Heavy Is the Crown',
				preview_url: null,
				track_number: 4,
				type: 'track',
				uri: 'spotify:track:2HBBM75Xv3o2Mqdyh1NcM0',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 170445,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/3k4gjmYNJugQRlh2aounZ9',
				},
				href: 'https://api.spotify.com/v1/tracks/3k4gjmYNJugQRlh2aounZ9',
				id: '3k4gjmYNJugQRlh2aounZ9',
				name: 'Over Each Other',
				preview_url: null,
				track_number: 5,
				type: 'track',
				uri: 'spotify:track:3k4gjmYNJugQRlh2aounZ9',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 140915,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/7BkzAHnNW7WfrT4NcLaUDx',
				},
				href: 'https://api.spotify.com/v1/tracks/7BkzAHnNW7WfrT4NcLaUDx',
				id: '7BkzAHnNW7WfrT4NcLaUDx',
				name: 'Casualty',
				preview_url: null,
				track_number: 6,
				type: 'track',
				uri: 'spotify:track:7BkzAHnNW7WfrT4NcLaUDx',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 211027,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/7diOv6wm3ngF7Vt6ubK0Sf',
				},
				href: 'https://api.spotify.com/v1/tracks/7diOv6wm3ngF7Vt6ubK0Sf',
				id: '7diOv6wm3ngF7Vt6ubK0Sf',
				name: 'Overflow',
				preview_url: null,
				track_number: 7,
				type: 'track',
				uri: 'spotify:track:7diOv6wm3ngF7Vt6ubK0Sf',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 183584,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/6i5qhmmF9UNUBRyrPSGn4m',
				},
				href: 'https://api.spotify.com/v1/tracks/6i5qhmmF9UNUBRyrPSGn4m',
				id: '6i5qhmmF9UNUBRyrPSGn4m',
				name: 'Two Faced',
				preview_url: null,
				track_number: 8,
				type: 'track',
				uri: 'spotify:track:6i5qhmmF9UNUBRyrPSGn4m',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 185414,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/0J1IJsMbKWb5g2sJArTkGF',
				},
				href: 'https://api.spotify.com/v1/tracks/0J1IJsMbKWb5g2sJArTkGF',
				id: '0J1IJsMbKWb5g2sJArTkGF',
				name: 'Stained',
				preview_url: null,
				track_number: 9,
				type: 'track',
				uri: 'spotify:track:0J1IJsMbKWb5g2sJArTkGF',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 209083,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/7M8eZBRTD9QNasEVReEM0H',
				},
				href: 'https://api.spotify.com/v1/tracks/7M8eZBRTD9QNasEVReEM0H',
				id: '7M8eZBRTD9QNasEVReEM0H',
				name: 'IGYEIH',
				preview_url: null,
				track_number: 10,
				type: 'track',
				uri: 'spotify:track:7M8eZBRTD9QNasEVReEM0H',
				is_local: false,
			},
			{
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz',
						},
						href: 'https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
						id: '6XyY86QOPPrYVGvF9ch6wz',
						name: 'Linkin Park',
						type: 'artist',
						uri: 'spotify:artist:6XyY86QOPPrYVGvF9ch6wz',
					},
				],
				available_markets,
				disc_number: 1,
				duration_ms: 209844,
				explicit: true,
				external_urls: {
					spotify: 'https://open.spotify.com/track/6aCBjSb87RizdH8lVBIRW7',
				},
				href: 'https://api.spotify.com/v1/tracks/6aCBjSb87RizdH8lVBIRW7',
				id: '6aCBjSb87RizdH8lVBIRW7',
				name: 'Good Things Go',
				preview_url: null,
				track_number: 11,
				type: 'track',
				uri: 'spotify:track:6aCBjSb87RizdH8lVBIRW7',
				is_local: false,
			},
		],
	},
	copyrights: [
		{
			text: '© 2024 Linkin Park, LLC under exclusive license to Warner Records Inc.',
			type: 'C',
		},
		{
			text: '℗ 2024 Linkin Park, LLC under exclusive license to Warner Records Inc.',
			type: 'P',
		},
	],
	external_ids: {
		upc: '093624839811',
	},
	genres: [],
	label: 'Warner Records',
	popularity: 91,
};
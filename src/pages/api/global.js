export default function handler(req, res) {
  res.status(200).json({ 
		address: [
			'Pasaje 3 241, B7540XAA Villa Arcadia,',
			'Provincia de Buenos Aires, Argentina',
		],
		email: 'hueneyruca@gmail.com',
		phone: '+54 (0291)5769286',
		gmaps_link: 'https://shorturl.at/hnEV7',
		social: {
			facebook: 'https://www.facebook.com/Hosteria.Hueney.Ruca/?locale=es_LA',
			instagram: 'https://www.instagram.com/hosteriahueneyruca/?hl=es'
		}
	})
}
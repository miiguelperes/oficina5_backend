module.exports = {
	// secret: usado quando criamos e verificamos JSON Web Tokens
	secret: 'fuckingwebsector',
	maxAge: '5m',
	refreshSecret: 'refreshfuckingwebsector',
	refreshMaxAge: '7d',
	privateKey: `-----BEGIN PRIVATE KEY-----
	MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCkQB9BLIXgTqz8
	5ucu4GxNf0C4SpTpg9wojGpZSV+IeKKgSXjHAFDL43EKVLWykktMvyoecHzEAOa7
	pDboCROuAZg4Jo+/OVyEKUtg4R/YrdJubivj8htdIAHslrtpm8uJBTHitrvEjDpi
	73NhKPV5WS+qevZHaXod5+s2iYDidSosk4xPQNAnFtaFRMTk4BRh33LnJ0zphJIQ
	LHWzuwEPMjqHDQsyFuiprkF/6ZRICPKXPapXeZXaQDtDRtqwnuPXaXvXddbnwA9v
	Zy7BfnKGGtUNPaLjKnkjRwNthtXSMtGEgdH93vTvWa4kcY7z7LneEucKqAiF9aFx
	QLbK27/rAgMBAAECggEAR++pgKLeU3pBu1XpxJcX9+0WzGAlzgwpPT0aStae16d2
	GltzYTzbJiEL3ilxlq8J+afz63b6veFjLKVkQsXO77PVFiqVZHvb8Coh0GFo0D54
	3lK0OFZN88BT92mg1UUdpHo4+gFsRU3hOHmE//WvZSFRhgnqmSYyDK0JUE5yuzs/
	qGqWyKCIGbv9zUIRhPIFRNxZoUY0Blp7Vq4xt0ax7RSHsUdgzreQt37tje0Y63Ud
	uVvgONYyaAARFt7FpdNZy4EbnpW4O7zix3tqBAqLjHXhzJcDNfEXmJHwXzpR5fnl
	s7dOwtT8js68xTUW4M7QQCFghaFExflxXM4gVk8NCQKBgQDVDYrX5rtygkHFOkRm
	2qgIMUUYZaClZzX/lei3oSHkfNnvnfZVcks7nYnACYyShF9VTqRFWb+r/vkz4uVn
	pe98XXUhJlLPE4LePtkn+W/aMPMu8NiykKjKruw812o9vFDCw5jfjw5g7y81tBOV
	Ypa+DTtlspRFNGQQ8rGECTJPTwKBgQDFXCmBuqA0jU/wWB9RaRyMdDrKsQwrA346
	j/EYnQi2XNzpAlZqxp2B+jW1uoQVA+xRQ2l1gKuR18JZnAyt5HVqrfh2/Esq2YAI
	721TRCHT8lsnQv9Bfm35iXzYt5HAgyjZm+6Wo1TnoFjjab3X+t4M4NGmC5352w+V
	/Hjxu86+pQKBgGRNed5nTDx+woQeCHH74zvoJkV0Iwt76dooM2WwQIqXlOrQjVZw
	9qZcZqu4UyvvkgpRedkEhc5tvdkFq0b+wh7kyO4QYtAGuYf0QrwlHNm2Teb9kKeQ
	n0a8z49dQzFJZSQsfd5SNUzBjpJT8xxTS/CxvhME3fUu0yV/fL9SrRLVAoGBAK3Z
	i26NeQYR3PL4jU3na5CF6iwWXYOeZhksJtLpsX0CvE49Euan4qNWRu24SRVCCW9k
	FIe/OmMUTk0lWz3q20uHyDD3+TbbtR8p2YHZqHrNKGKjb7q/phyEcgdtXOTaJKfb
	5gWoBuiqpOJeiS6x+9wYRlUgMp6fy1Dxv5AhQfNJAoGANE13lNq4zCfiLXYxPTCc
	OX+STQsdVU341AcwZZuroh76evPRDrK6UtPV0BbvJUpyvL08YL/oywzIQ/Bq/J/g
	uHZWEyZs990T4ycOZj3lvSk2lWbhSK0qd6kqjQp9YdbhMJ5CrknJcXL2xh6570/T
	OZp8y55pgloMFE7TwT/LYlo=
	-----END PRIVATE KEY-----`,
	certificate: `-----BEGIN CERTIFICATE-----
	MIIFzDCCBLSgAwIBAgISBNMv1so4TiRCu+f4EooEqLj9MA0GCSqGSIb3DQEBCwUA
	MEoxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MSMwIQYDVQQD
	ExpMZXQncyBFbmNyeXB0IEF1dGhvcml0eSBYMzAeFw0xOTExMjkxOTI2MDhaFw0y
	MDAyMjcxOTI2MDhaMCYxJDAiBgNVBAMTG3JlY29tZW5kYWNhby5yZWFsdGVjLmNv
	bS5icjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKRAH0EsheBOrPzm
	5y7gbE1/QLhKlOmD3CiMallJX4h4oqBJeMcAUMvjcQpUtbKSS0y/Kh5wfMQA5ruk
	NugJE64BmDgmj785XIQpS2DhH9it0m5uK+PyG10gAeyWu2mby4kFMeK2u8SMOmLv
	c2Eo9XlZL6p69kdpeh3n6zaJgOJ1KiyTjE9A0CcW1oVExOTgFGHfcucnTOmEkhAs
	dbO7AQ8yOocNCzIW6KmuQX/plEgI8pc9qld5ldpAO0NG2rCe49dpe9d11ufAD29n
	LsF+coYa1Q09ouMqeSNHA22G1dIy0YSB0f3e9O9ZriRxjvPsud4S5wqoCIX1oXFA
	tsrbv+sCAwEAAaOCAs4wggLKMA4GA1UdDwEB/wQEAwIFoDAdBgNVHSUEFjAUBggr
	BgEFBQcDAQYIKwYBBQUHAwIwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQUHnxYFftS
	ccqvIk90dkKq+LWL+wYwHwYDVR0jBBgwFoAUqEpqYwR93brm0Tm3pkVl7/Oo7KEw
	bwYIKwYBBQUHAQEEYzBhMC4GCCsGAQUFBzABhiJodHRwOi8vb2NzcC5pbnQteDMu
	bGV0c2VuY3J5cHQub3JnMC8GCCsGAQUFBzAChiNodHRwOi8vY2VydC5pbnQteDMu
	bGV0c2VuY3J5cHQub3JnLzCBggYDVR0RBHsweYIYYWdyb25vbWljLnJlYWx0ZWMu
	Y29tLmJyghNjb3JlLnJlYWx0ZWMuY29tLmJyghJlbXMucmVhbHRlYy5jb20uYnKC
	F21hcXVpbmFzLnJlYWx0ZWMuY29tLmJyghtyZWNvbWVuZGFjYW8ucmVhbHRlYy5j
	b20uYnIwTAYDVR0gBEUwQzAIBgZngQwBAgEwNwYLKwYBBAGC3xMBAQEwKDAmBggr
	BgEFBQcCARYaaHR0cDovL2Nwcy5sZXRzZW5jcnlwdC5vcmcwggEFBgorBgEEAdZ5
	AgQCBIH2BIHzAPEAdgDwlaRZ8gDRgkAQLS+TiI6tS/4dR+OZ4dA0prCoqo6ycwAA
	AW6415zKAAAEAwBHMEUCIQDGwPLDvL8BaRmTTi3uzRDjPOjkshK34bJ3UOwRwo6o
	yAIgTPlsNGDGy9ssiNqszwKIPdPVfCwsByH0KW+jw8Zg7QgAdwCyHgXMi6LNiiBO
	h2b5K7mKJSBna9r6cOeySVMt74uQXgAAAW6415zGAAAEAwBIMEYCIQCYv7Wlxp0y
	HyX5wP+wKDr3hKdg44YzgTe0aVLcuxEs/QIhAJsnrhpBV9ykBPwnIvOvaTfMp34/
	2rbXPuizJCmK75slMA0GCSqGSIb3DQEBCwUAA4IBAQA8KjjesajuXhD8VVe/WTL/
	W8ocFlzuW7HmGnTWLXM2NoouGE700WTz/2UNFw0Lgv+ODyz3jbHYdPcDq0WiMWrn
	oT5O3W5KjKuyDWD7gcok40Z2SgLt9VEElEhCSx5zrMwcebogoEbrzRuVnkgte19f
	EnPtSTUuRQIDZGdvQ+/hAYBwjRro4jqbzbfRuzUnyI2AqMBCBxVGz+ycQh3NKSe+
	kmx3w9axWFrZK8PzAVaxjb42FX3W84+As7h5FuDMv7c5MonIm3XUKMBTnZYa9xoo
	KIuDFbnNDOp7u+DP6gvkRNs7LOfNYZfzXLpULHFDmC5eS1iaTmQAp/nfFIUx7W8S
	-----END CERTIFICATE-----
	-----BEGIN CERTIFICATE-----
	MIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/
	MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT
	DkRTVCBSb290IENBIFgzMB4XDTE2MDMxNzE2NDA0NloXDTIxMDMxNzE2NDA0Nlow
	SjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxIzAhBgNVBAMT
	GkxldCdzIEVuY3J5cHQgQXV0aG9yaXR5IFgzMIIBIjANBgkqhkiG9w0BAQEFAAOC
	AQ8AMIIBCgKCAQEAnNMM8FrlLke3cl03g7NoYzDq1zUmGSXhvb418XCSL7e4S0EF
	q6meNQhY7LEqxGiHC6PjdeTm86dicbp5gWAf15Gan/PQeGdxyGkOlZHP/uaZ6WA8
	SMx+yk13EiSdRxta67nsHjcAHJyse6cF6s5K671B5TaYucv9bTyWaN8jKkKQDIZ0
	Z8h/pZq4UmEUEz9l6YKHy9v6Dlb2honzhT+Xhq+w3Brvaw2VFn3EK6BlspkENnWA
	a6xK8xuQSXgvopZPKiAlKQTGdMDQMc2PMTiVFrqoM7hD8bEfwzB/onkxEz0tNvjj
	/PIzark5McWvxI0NHWQWM6r6hCm21AvA2H3DkwIDAQABo4IBfTCCAXkwEgYDVR0T
	AQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwfwYIKwYBBQUHAQEEczBxMDIG
	CCsGAQUFBzABhiZodHRwOi8vaXNyZy50cnVzdGlkLm9jc3AuaWRlbnRydXN0LmNv
	bTA7BggrBgEFBQcwAoYvaHR0cDovL2FwcHMuaWRlbnRydXN0LmNvbS9yb290cy9k
	c3Ryb290Y2F4My5wN2MwHwYDVR0jBBgwFoAUxKexpHsscfrb4UuQdf/EFWCFiRAw
	VAYDVR0gBE0wSzAIBgZngQwBAgEwPwYLKwYBBAGC3xMBAQEwMDAuBggrBgEFBQcC
	ARYiaHR0cDovL2Nwcy5yb290LXgxLmxldHNlbmNyeXB0Lm9yZzA8BgNVHR8ENTAz
	MDGgL6AthitodHRwOi8vY3JsLmlkZW50cnVzdC5jb20vRFNUUk9PVENBWDNDUkwu
	Y3JsMB0GA1UdDgQWBBSoSmpjBH3duubRObemRWXv86jsoTANBgkqhkiG9w0BAQsF
	AAOCAQEA3TPXEfNjWDjdGBX7CVW+dla5cEilaUcne8IkCJLxWh9KEik3JHRRHGJo
	uM2VcGfl96S8TihRzZvoroed6ti6WqEBmtzw3Wodatg+VyOeph4EYpr/1wXKtx8/
	wApIvJSwtmVi4MFU5aMqrSDE6ea73Mj2tcMyo5jMd6jmeWUHK8so/joWUoHOUgwu
	X4Po1QYz+3dszkDqMp4fklxBwXRsW10KXzPMTZ+sOPAveyxindmjkW8lGy+QsRlG
	PfZ+G6Z6h7mjem0Y+iWlkYcV4PIWL1iwBi8saCbGS5jN2p8M+X+Q7UNKEkROb3N6
	KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==
	-----END CERTIFICATE-----`,
	chain: `-----BEGIN CERTIFICATE-----
	MIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/
	MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT
	DkRTVCBSb290IENBIFgzMB4XDTE2MDMxNzE2NDA0NloXDTIxMDMxNzE2NDA0Nlow
	SjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxIzAhBgNVBAMT
	GkxldCdzIEVuY3J5cHQgQXV0aG9yaXR5IFgzMIIBIjANBgkqhkiG9w0BAQEFAAOC
	AQ8AMIIBCgKCAQEAnNMM8FrlLke3cl03g7NoYzDq1zUmGSXhvb418XCSL7e4S0EF
	q6meNQhY7LEqxGiHC6PjdeTm86dicbp5gWAf15Gan/PQeGdxyGkOlZHP/uaZ6WA8
	SMx+yk13EiSdRxta67nsHjcAHJyse6cF6s5K671B5TaYucv9bTyWaN8jKkKQDIZ0
	Z8h/pZq4UmEUEz9l6YKHy9v6Dlb2honzhT+Xhq+w3Brvaw2VFn3EK6BlspkENnWA
	a6xK8xuQSXgvopZPKiAlKQTGdMDQMc2PMTiVFrqoM7hD8bEfwzB/onkxEz0tNvjj
	/PIzark5McWvxI0NHWQWM6r6hCm21AvA2H3DkwIDAQABo4IBfTCCAXkwEgYDVR0T
	AQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwfwYIKwYBBQUHAQEEczBxMDIG
	CCsGAQUFBzABhiZodHRwOi8vaXNyZy50cnVzdGlkLm9jc3AuaWRlbnRydXN0LmNv
	bTA7BggrBgEFBQcwAoYvaHR0cDovL2FwcHMuaWRlbnRydXN0LmNvbS9yb290cy9k
	c3Ryb290Y2F4My5wN2MwHwYDVR0jBBgwFoAUxKexpHsscfrb4UuQdf/EFWCFiRAw
	VAYDVR0gBE0wSzAIBgZngQwBAgEwPwYLKwYBBAGC3xMBAQEwMDAuBggrBgEFBQcC
	ARYiaHR0cDovL2Nwcy5yb290LXgxLmxldHNlbmNyeXB0Lm9yZzA8BgNVHR8ENTAz
	MDGgL6AthitodHRwOi8vY3JsLmlkZW50cnVzdC5jb20vRFNUUk9PVENBWDNDUkwu
	Y3JsMB0GA1UdDgQWBBSoSmpjBH3duubRObemRWXv86jsoTANBgkqhkiG9w0BAQsF
	AAOCAQEA3TPXEfNjWDjdGBX7CVW+dla5cEilaUcne8IkCJLxWh9KEik3JHRRHGJo
	uM2VcGfl96S8TihRzZvoroed6ti6WqEBmtzw3Wodatg+VyOeph4EYpr/1wXKtx8/
	wApIvJSwtmVi4MFU5aMqrSDE6ea73Mj2tcMyo5jMd6jmeWUHK8so/joWUoHOUgwu
	X4Po1QYz+3dszkDqMp4fklxBwXRsW10KXzPMTZ+sOPAveyxindmjkW8lGy+QsRlG
	PfZ+G6Z6h7mjem0Y+iWlkYcV4PIWL1iwBi8saCbGS5jN2p8M+X+Q7UNKEkROb3N6
	KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==
	-----END CERTIFICATE-----`
};
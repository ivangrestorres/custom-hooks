# useForm Hook

Necesita tener instalada previamente `xmldom`

```

npm install xmldom

```

Ejemplo:

```
	const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
		<data>
			<nombre>Juan Pérez</nombre>
			<edad>30</edad>
		</data>`;

  	const xslString = `<?xml version="1.0" encoding="UTF-8"?>
		<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
		<xsl:output method="html" indent="yes"/>

		<xsl:template match="/">
			<html>
				<head>
					<title>Conversor XML a HTML</title>
				</head>
				<body>
					<h1>Datos</h1>
					<p>Nombre: <xsl:value-of select="data/nombre"/></p>
					<p>Edad: <xsl:value-of select="data/edad"/></p>
				</body>
			</html>
		</xsl:template>
		</xsl:stylesheet>`;

	const html = useXSLTTransform(xmlString, xslString);

```

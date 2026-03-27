import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Statement",
  description:
    "Privacy statement van Arianne Lindhout Bedrijfsgeneeskunde. Lees hoe wij omgaan met uw persoonsgegevens.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Privacy() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-8"></div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
            Privacy Statement
          </h1>
          <p className="text-sm text-slate-400 font-sans mb-12">
            Vastgesteld op 01-02-2019
          </p>

          <div className="prose prose-slate max-w-none font-sans">
            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Algemeen
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Arianne Lindhout bedrijfsgeneeskunde respecteert uw privacy. Daarom
              wordt alle persoonlijke informatie die u verstrekt of die anderszins
              verkregen is, vertrouwelijk behandeld.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              De verwerking van uw persoonsgegevens gebeurt op een wijze, die in
              overeenstemming is met de Algemene Verordening Gegevensbescherming en
              de Uitvoeringswet Algemene verordening gegevensbescherming. Onder de
              verwerking van persoonsgegevens wordt verstaan: elke handeling of elk
              geheel van handelingen met betrekking tot persoonsgegevens, waaronder
              in ieder geval het verzamelen, vastleggen, ordenen, bewaren,
              bijwerken, wijzigen, opvragen, raadplegen, gebruiken, met elkaar in
              verband brengen, beschikbaar stellen, verstrekken door middel van
              doorzending, en ook het afschermen, uitwissen of vernietigen van
              persoonsgegevens.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Arianne Lindhout bedrijfsgeneeskunde biedt verschillende soorten
              diensten op het vlak van arbodienstverlening en re-integratie. Voor de
              uitvoering van deze dienstverlening moeten bepaalde persoonsgegevens
              verzameld worden van zowel werkgevers als medewerkers. In dit
              privacystatement wordt toegelicht welke persoonsgegevens van u
              verzameld worden en hoe hiermee wordt omgegaan.
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">
              In dit privacystatement kunt u het volgende vinden:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-6">
              <li>welke persoonsgegevens van u verwerkt worden en voor welke doeleinden;</li>
              <li>doel verwerking persoonsgegevens;</li>
              <li>wie uw gegevens mag inzien;</li>
              <li>aan wie uw gegevens doorgegeven worden;</li>
              <li>hoe uw gegevens bewaard en beveiligd worden;</li>
              <li>welke invloed u daar zelf op kunt uitoefenen.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Welke persoonsgegevens worden verwerkt?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Arianne Lindhout bedrijfsgeneeskunde verzamelt en verwerkt in
              voorkomende gevallen de volgende gegevens:
            </p>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Persoonsgegevens
            </h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-6">
              <li>Uw naam, adres, postcode, woonplaats, land</li>
              <li>Uw telefoonnummer en emailadres</li>
              <li>Uw geboortedatum, geslacht, burgerlijke staat, nationaliteit</li>
              <li>Uw burgerservicenummer (BSN)</li>
            </ul>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Gegevens over uw werk
            </h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-6">
              <li>Bedrijfsgegevens als bedrijfsnaam, vestigingsadres, contactpersoon, telefoonnummer, uitvoeringsinstantie (UWV)</li>
              <li>Functie, afdeling, soort dienstverband, administratienummer</li>
              <li>Datum indienst- en uitdiensttreding</li>
            </ul>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Gegevens over de arbeidsomstandigheden op uw werk
            </h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-6">
              <li>Zoals RI&amp;E, werkplekonderzoek, ergonomisch onderzoek en ongevallen</li>
            </ul>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Gegevens over uw verzuim
            </h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-6">
              <li>Datum eerste en laatste ziektedag en andere verzuimgegevens en overzichten</li>
            </ul>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Gegevens over uw arbeidsongeschiktheid / mate van belastbaarheid
            </h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-6">
              <li>Gegevens/conclusies ten aanzien van uw belastbaarheid</li>
              <li>Aantal uren per dag of per week dat u eigen of passend werk kan verrichten, met vermelding van de aanvangsdatum</li>
              <li>Gegevens over het verwachte herstel</li>
              <li>Arbeidsongeschiktheidspercentage of het percentage loonwaarde</li>
              <li>Of sprake is van enige vorm van schadeloosstelling, zoals vangnetsituatie of regres</li>
              <li>Of sprake is van loonopschorting of loonstopzetting</li>
              <li>Of er sprake is van enige vorm van sanctionering op grond van de Ziektewet of WIA, indien uw werkgever hiervoor eigenrisicodrager is</li>
              <li>De beschikking van het UWV</li>
              <li>Of en wanneer een interventie is ingezet</li>
              <li>Kosten van de interventie</li>
              <li>Of een plan van aanpak is opgesteld</li>
              <li>Of de activiteiten uit het plan van aanpak (tijdig) zijn uitgevoerd</li>
              <li>Voorgestelde of reeds getroffen re-integratiemaatregelen</li>
              <li>WIA intredingen</li>
            </ul>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Medische gegevens*
            </h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-6">
              <li>De diagnose en de behandelgegevens</li>
              <li>De oorzaak en aard van uw arbeidsongeschiktheid</li>
              <li>Gegevens voortvloeiend uit controle aan huis, telefonisch contact en eigen verklaring</li>
              <li>Gegevens over PAGO, PMO, PGO</li>
              <li>Verzekeringsgegevens, huisarts- en specialistengegevens, verpleegadres</li>
              <li>Keuringsuitslagen- en gegevens</li>
              <li>Gegevens over uw privé situatie</li>
              <li>Data waarop (vervolg)consulten, behandelingen, verrichtingen, keuringen hebben plaatsgevonden</li>
              <li>Spreekuurgegevens, anamnese, onderzoeksgegevens en diagnose</li>
              <li>Therapie- behandel- en medicatiegegevens</li>
              <li>Complicaties, doorverwijzing</li>
            </ul>
            <p className="text-sm text-slate-500 italic mb-6">
              *Deze gegevens vallen onder het medisch geheim.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Doel verwerking persoonsgegevens
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Uw gegevens worden enkel in overeenstemming voor de uitvoering van de
              dienstverlening verwerkt. Dit gebeurt op een behoorlijke en zorgvuldige
              wijze en alleen voor de onderstaande doeleinden:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-6">
              <li>De arbeidsomstandighedenzorg</li>
              <li>De begeleiding bij ziekteverzuim</li>
              <li>De re-integratie in verband met ziekte of arbeidsongeschiktheid</li>
              <li>De uitvoering van de wettelijke taken die waarbij Arianne Lindhout direct en indirect betrokken zijn (zoals de Arbowet, Regeling procesgang eerste en tweede ziektejaar, Wet verbetering poortwachter, Wet WIA, de Ziektewet en dergelijke)</li>
              <li>Bedrijfsartsen zijn verplicht om in het kader van hun herregistratie bij hun klanten (werkgevers en werknemers) te informeren naar het oordeel over de werkzaamheden van de bedrijfsarts. Uw (email) adres kan derhalve gebruikt worden om u te benaderen voor een klanttevredenheidsonderzoek of enquête.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Wie mag uw gegevens inzien?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Bedrijfsarts Arianne Lindhout bepaalt welke gegevens zij nodig heeft om
              haar werk te kunnen doen en zij stelt het doel en de middelen van de
              verwerking vast. Zij is de verwerkingsverantwoordelijke.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Uw gegevens worden bewaard in een digitale administratie. Alleen de
              bedrijfsarts en de medewerkers die onder het medisch geheim vallen,
              hebben toegang tot het medisch dossier.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Aan wie uw gegevens doorgegeven worden
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Uitsluitend binnen de geldende wettelijke regels voor het verwerken van
              persoonsgegevens, kunnen uw gegevens verstrekt worden aan derden. U
              wordt vooraf geïnformeerd indien informatie door derden wordt gevraagd.
              Daarbij wordt uiteraard ook vermeld om welke informatie het gaat.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Het delen van gegevens komt aan de orde wanneer derden betrokken worden
              bij uw begeleiding of re-integratie. In een dergelijke situatie worden
              alleen gegevens gedeeld voor zover dit voor de taakuitoefening
              noodzakelijk is en afspraken zijn gemaakt over de uitvoering van
              werkzaamheden.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Uw werkgever krijgt alleen die informatie die noodzakelijk is voor de
              werkgever om te kunnen beoordelen over de loondoorbetaling, de
              verzuimbegeleiding of re-integratie. Medische gegevens mogen niet met
              de werkgever worden gedeeld. De werkgever mag alleen geïnformeerd
              worden over uw mate van belastbaarheid, bestaande mogelijkheden en
              beperkingen, re-integratiemogelijkheden, benodigde werkaanpassing of
              werkvoorziening, e.d. Uw werkgever mag uit de verstrekte gegevens niet
              kunnen afleiden wat de reden is van uw verzuim.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Aan het UWV worden alleen die gegevens verstrekt die het UWV nodig
              heeft voor zijn taakuitoefening.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ook aan verzuimverzekeraars worden alleen die gegevens verstrekt die
              noodzakelijk zijn om de hoogte van een uitkering vast te stellen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Tot slot worden alleen gegevens aan derden verstrekt wanneer daartoe op
              grond van de wet of door een rechterlijke uitspraak een verplichting
              bestaat.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Hoe uw gegevens bewaard en beveiligd worden
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Arianne Lindhout bedrijfsgeneeskunde hecht grote waarde aan de
              beveiliging en bescherming van uw persoonsgegevens en zorgt, rekening
              houdend met de stand van de techniek, voor passende technische en
              organisatorische maatregelen om een op het risico afgestemd
              beveiligingsniveau te waarborgen. In het geval Arianne Lindhout
              bedrijfsgeneeskunde gebruik maakt van diensten van derde partijen,
              zoals een IT-leverancier, zal Arianne Lindhout bedrijfsgeneeskunde in
              het kader van de bescherming van persoonsgegevens in een
              verwerkersovereenkomst afspraken vastleggen over afdoende
              beveiligingsmaatregelen.
            </p>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Bewaartermijn persoonsgegevens
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Arianne Lindhout bedrijfsgeneeskunde bewaart persoonsgegevens die
              worden verwerkt niet langer dan noodzakelijk is voor de hiervoor
              genoemde doeleinden van de gegevensverwerking dan wel op grond van wet-
              en regelgeving is vereist. Hoelang bepaalde gegevens worden bewaard is
              afhankelijk van de aard van de gegevens en de doeleinden waarvoor zij
              worden verwerkt. De bewaartermijn kan dus per doel verschillend zijn.
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">
              Arianne Lindhout bedrijfsgeneeskunde hanteert de volgende
              bewaartermijnen:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>
                <strong>Medische stukken:</strong> volgens de Wet op de geneeskundige
                behandelingsovereenkomst (WGBO) is de wettelijke bewaartermijn
                vijftien jaar &lsquo;of zoveel langer als uit de zorg van een goed
                hulpverlener voortvloeit&rsquo;;
              </li>
              <li>
                <strong>Bijzondere en/of gevoelige persoonsgegevens</strong> die wij
                verwerken en niet medische of wettelijk noodzakelijk bewaart hoeven
                te worden, worden na het gebruik direct verwijderd;
              </li>
              <li>
                <strong>Klantgegevens</strong> (personalia, adresgegevens,
                telefoonnummers en e-mailadressen) worden verwijderd na 10 jaar
                wanneer er geen activiteit is geweest;
              </li>
              <li>
                <strong>Overige persoonsgegevens</strong> via correspondentie en
                telefonisch contact worden verwijderd na 7 jaar;
              </li>
              <li>
                <strong>Anonieme websitegegevens</strong> (apparaat type,
                internetbrowser en surfgedrag) worden verwijderd na 4 jaar;
              </li>
              <li>
                <strong>Niet-medische gegevens:</strong> bewaartermijn is 2 jaar.
                Indien uw werkgever eigenrisicodrager is, zijn de bewaartermijnen
                langer;
              </li>
              <li>
                <strong>Medische gegevens:</strong> bewaartermijn is 15 jaar. Bij
                blootstelling aan carcinogene stoffen of biologische agentia is de
                bewaartermijn 40 jaar en bij werken met ioniserende straling 30 jaar;
              </li>
              <li>
                Wanneer de bewaartermijn verstreken is, zullen uw gegevens op veilige
                wijze worden verwijderd en vernietigd. Indien wij uw gegevens echter
                zodanig bewerken dat de herleiding tot u redelijkerwijs onmogelijk
                is, kunnen wij uw gegevens in geanonimiseerde vorm bewaren en
                gebruiken voor managementinformatie, onderzoeksdoeleinden en
                benchmarking.
              </li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Privacy rechten van betrokkenen
            </h2>
            <p className="text-slate-600 leading-relaxed mb-2">
              U heeft de volgende rechten:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-6">
              <li>Recht op informatie (ontvangst privacyverklaring)</li>
              <li>Recht op inzage (m.u.v. persoonlijke aantekeningen van verwerkingsverantwoordelijke)</li>
              <li>Recht op correctie, aanvulling, verwijdering of afscherming (alleen van feitelijke gegevens)</li>
              <li>Recht van verzet</li>
              <li>Recht op dataportabiliteit</li>
              <li>Recht op vergetelheid</li>
              <li>Recht op beperking van de verwerking van persoonsgegevens</li>
              <li>Recht om eerder gegeven toestemming in te trekken</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              Een verzoek tot inzage, correctie, beperking, verzet,
              overdraagbaarheid van gegevens, verwijdering van uw persoonsgegevens of
              intrekking van eerder gegeven toestemming, kunt u sturen via de
              onderstaande contactgegevens. U ontvangt binnen vier weken na ontvangst
              van uw verzoek nader bericht van ons.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Er kunnen zich omstandigheden voordoen waarbij Arianne Lindhout
              bedrijfsgeneeskunde aan uw verzoek als betrokkene geen of niet
              volledige uitvoering kan geven. Hierbij valt te denken aan de
              wettelijke verplichten van een bedrijfsarts en wettelijke
              bewaartermijnen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Uw verzoeken kunt u richten aan:{" "}
              <a
                href="mailto:arianne@lindhoutbedrijfsgeneeskunde.nl"
                className="text-medical hover:underline"
              >
                arianne@lindhoutbedrijfsgeneeskunde.nl
              </a>
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Teneinde zeker te weten dat op basis van uw verzoek de betreffende
              persoonsgegevens aan de juiste persoon worden verstrekt, vragen wij u
              ter verificatie een kopie over te leggen van een geldig paspoort,
              rijbewijs of identiteitsbewijs met een afgeschermde pasfoto en
              BSN-nummer. Arianne Lindhout bedrijfsgeneeskunde neemt alleen verzoeken
              in behandeling die betrekking hebben op uw eigen persoonsgegevens.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Aanpassing privacy statement
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Arianne Lindhout bedrijfsgeneeskunde heeft het recht de inhoud van dit
              privacy statement op ieder gewenst moment zonder voorafgaande
              kennisgeving te wijzigen. Aanpassingen van het privacy statement worden
              op de website van Arianne Lindhout bedrijfsgeneeskunde gepubliceerd.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Vragen &amp; Contact
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Bij vragen of opmerkingen over de verwerking van uw persoonsgegevens en
              dit privacy statement kunt u contact opnemen met Arianne Lindhout
              bedrijfsgeneeskunde:{" "}
              <a
                href="mailto:arianne@lindhoutbedrijfsgeneeskunde.nl"
                className="text-medical hover:underline"
              >
                arianne@lindhoutbedrijfsgeneeskunde.nl
              </a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/"
              className="text-medical font-display font-medium hover:underline"
            >
              &larr; Terug naar home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

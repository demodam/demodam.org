import React from 'react'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import ResponsiveImage from '../components/ResponsiveImage'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Payoff from '../components/Payoff'
import Heading from '../components/Heading'
import Span from '../components/Span'
import Background from '../components/Background'
import Logos from '../components/Logos'
import Timeline from '../components/Timeline'

import casesImage from '../images/undraw_file_analysis_8k9b.svg'
import selectionImage from '../images/undraw_personal_settings_kihd.svg'
import authorizationImage from '../images/undraw_two_factor_authentication_namy.svg'
import dashboardImage from '../images/undraw_dashboard_nklg.svg'
import integrationImage from '../images/undraw_hologram_fjwp.svg'

const IndexPage = ({ location }) => (
  <Layout>
    <SEO title="Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er beschikbaar zijn voor gemeenten." />
    <Background backgroundColor="#cbce1c">
      <Container>
        <Navigation as="nav" location={location} />
        <Section>
          <Payoff />
        </Section>
      </Container>
    </Background>
    <Background backgroundColor="#000000">
      <Container>
        <Logos />
      </Container>
    </Background>
    <Container>
      <Section id="over-demodam">
        <Flex>
          <Box>
            <p>Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er beschikbaar zijn voor gemeenten. Op Demodam.nl kun je straks zien welke Common Ground componenten (bouwstenen) achter die diensten al klaar zijn en hoe ze met elkaar samenwerken. Gemeenten kunnen vervolgens besluiten om zo’n dienst, bijvoorbeeld een applicatie voor online geboorteaangifte, ook in te zetten voor hun inwoners. Ook is het mogelijk om verder te bouwen bovenop wat al beschikbaar is door zowel leveranciers als gemeenten.
            </p>
            <p>Demodam wordt gemaakt en onderhouden door de Common Ground community, bestaande uit mensen en organisaties vanuit zowel de overheid als het bedrijfsleven. De Foundation for Public Code ziet erop toe dat alle partijen gelijkwaardig zijn. Iedereen is welkom om bij te dragen. 
            </p>
            <H2>Demodam.nl is tijdelijk niet beschikbaaar.</h2> 
            <p>
                Wegens de log4j bug hebben we Demodam.nl tijdelijk offline gehaald. Gezien er ook een migratie op handen staat, zullen we dit hierin meenemen. Vanaf eind januari 2022 komt Demodam.nl weer in de lucht. Onze excuses voor het ongemak.   
            </p>

          </Box>
        </Flex>
      </Section>

      <Section textAlign="center">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jTK-sbee2qM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={authorizationImage} alt="Illustratie van desktop computer en mobiele applictie met een slot" />
          </Box>
          <Box width={3/5}>
            <h2>Op Demodam.nl laten we zien wat er beschikbaar is</h2>
            <p>Op <a href="https://demodam.nl/">Demodam.nl</a> kun je zien hoe digitale diensten werken voor burgers en ambtenaren. Het maakt tastbaar wat je met Common Ground kunt.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Demodam is een omgeving voor samenwerken</h2>
            <p>Overheden en hun leveranciers kunnen elkaar makkelijker vinden. Het helpt ons om onze werkwijzen op elkaar af te stemmen en het maakt het makkelijker om componenten met elkaar te laten samenwerken. Hierbij wordt je even niet gehinderd door legacy systemen en ontwikkelagenda’s van gemeenten, zodat je makkelijker proof of concepts kunt maken. We werken hierbij overigens samen met NL Design System, zodat een burger een consistente gebruikerservaring krijgt, ook al bestaat een dienst uit componenten die door verschillende leveranciers gebouwd zijn.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={selectionImage} alt="Illustratie van documenten met checklist" />
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={2/5}>
            <ResponsiveImage src={casesImage} alt="Illustratie van persoon en document" />
          </Box>
          <Box width={3/5}>
            <h2>Demodam helpt om Common Ground te verbeteren.</h2>
            <p>We stellen samen vast wat de minimale eisen aan componenten zijn op bijvoorbeeld het gebied van beveiliging, gebruiksvriendelijkheid en (code) standaarden. We leren daarbij van elkaar wat de best practises zijn. Het doel is uiteindelijk dat alle componenten op Demodam te zien zijn in een app store vergelijkbaar met die op je mobiele telefoon, waarbij je met een klik componenten en applicaties kunt installeren. Uiteraard moet je daarbij blind kunnen vertrouwen op de kwaliteit van de componenten. Daarmee verbetert Demodam de kwaliteit van het achterliggende Common Ground ecosysteem. Met name gebruiksvriendelijkheid en veiligheid hebben daarbij onze bijzondere aandacht.</p>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Flex>
          <Box width={3/5}>
            <h2>Met Demodam kun je innoveren</h2>
            <p>Juist doordat er straks al een stevige basis staat, kun je daar makkelijk op voortborduren. Ter illustratie: stel je wilt een dienst ontwikkelen over verschillende overheden heen, bijvoorbeeld een klantreis waarbij je als burger in een vloeiend proces zowel je geboorteaangifte kunt doen (bij je gemeente) als kinderdagopvangtoeslag kunt aanvragen (bij de Belastingdienst). Dat is nu technisch en organisatorisch nog heel lastig, maar met Demodam staan er straks al een zaaksysteem, een BRP systeem en NLX voor je klaar, zodat je gelijk een vliegende start kunt maken.</p>
          </Box>
          <Box width={2/5}>
            <ResponsiveImage src={dashboardImage} alt="Illustratie van persoon met tablet waarop grafieken getoond worden" />
          </Box>
        </Flex>
      </Section>

    </Container>
    <Background backgroundColor="#f5f5f6">
      <Container>
        <Section>
          <Heading align="center" fontSize="2rem">Tijdlijn</Heading>
        </Section>
      </Container>
    </Background>
    <Container>
      <Timeline>

        <Timeline.Container align="right">
            <Timeline.Content>
                <Span fontSize="0.9rem">Juli 2021</Span>
                <Heading as="h3" fontSize="1.5rem">Innovatiesubsidie toegekend</Heading>
                <p>Het ministerie van Binnenlandse Zaken en Koninkrijksrelaties heeft Demodam een subsidie van 150.000 euro toegekend.</p>
            </Timeline.Content>
        </Timeline.Container>

        <Timeline.Container align="left">
            <Timeline.Content>
                <Span fontSize="0.9rem">5 Juli tot 9 Juli 2021</Span>
                <Heading as="h3" fontSize="1.5rem">Demodam hackathon</Heading>
                <p>Samen werken aan een commonground etalage</p>
                <p><a href="https://www.meetup.com/nl-NL/Code-For-NL/events/278262253/">Informatie en inschrijven</a></p>
            </Timeline.Content>
        </Timeline.Container>

        <Timeline.Container align="right">
            <Timeline.Content>
                <Span fontSize="0.9rem">24 Juni 2021 13:00</Span>
                <Heading as="h3" fontSize="1.5rem">Demodam hackathon</Heading>
                <p>Onboarding en planning</p>
                <p><a href="https://www.meetup.com/nl-NL/Code-For-NL/events/278475015/">Informatie en inschrijven</a></p>
            </Timeline.Content>
        </Timeline.Container>

        <Timeline.Container align="left">
          <Timeline.Content>
            <Span fontSize="0.9rem">Juni 2021</Span>
            <Heading as="h3" fontSize="1.5rem">Kick-off Demodam</Heading>
            <p>Lancering van Demodam</p>
          </Timeline.Content>
        </Timeline.Container>

      </Timeline>
    </Container>
    <Footer />
  </Layout>
)

export default IndexPage

import React from "react";
import Main from "../../component/Main";
import panelImage from "../../asset/page/about/01001.jpg";
import headerImage from "../../asset/page/about/01002.jpg";
import History from "../../component/History";
import { data } from "../../lib/page/about";
import Header from "../../component/Header";
import Section from "../../component/Section";
import Panel from "../../component/Panel";
import Typography from "../../component/Typography";
import Icon from "../../component/Icon";
import styled from "styled-components";

const AboutHistory = styled(History)`
  margin: calc(var(--ds) * 1px) 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function About() {
  return (
    <Main>
      <Header
        title={"Sobre"}
        subject={"Conheça mais a equipe."}
        image={headerImage}
      />
      <Section>
        {data.history.map((data, i) => {
          return (
            <AboutHistory
              key={i}
              image={data.image}
              text={data.text}
              title={data.title}
            />
          );
        })}
      </Section>
      <Panel image={panelImage} href={"https://www.instagram.com/vicentebjj/"}>
        <Typography variant={"title"}>Acompanhe</Typography>
        <div>
          Vicente no <Icon name={"instagram"} /> Instagram
        </div>
      </Panel>
    </Main>
  );
}

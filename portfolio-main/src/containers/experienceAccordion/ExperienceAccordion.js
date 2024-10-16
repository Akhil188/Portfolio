import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: [0], // Set the first panel to be open by default
    };
  }

  handleAccordionChange = ({ expanded }) => {
    this.setState({ expanded });
  };

  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-accord">
        <Accordion
          expanded={this.state.expanded}
          onChange={this.handleAccordionChange}
        >
          {this.props.sections.map((section, sectionIndex) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                      color: `${theme.text}`,
                      ":hover": {
                        color: `${theme.secondaryText}`,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;

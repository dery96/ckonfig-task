import React, { Component } from "react";
import { Container, Col, Row, Button } from "reactstrap";

import LocalizedStrings from "react-localization";
import Ionicon from "react-ionicons";

import SummaryLabel from "./SummaryLabel";
import data from "../json/data";

class CarConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en",
      model: {
        name: "STANDARD",
        price: 530,
        available: {
          engine: [1, 2, 3],
          gearbox: [1, 2]
        }
      },
      engine: { name: "5.2 532BHP", price: 1350, id: 1 },
      gearbox: { name: "Manual", price: 1000, id: 1 },
      color: { name: "Red", hex: "#FF0000" },
      price: "$3570"
    };

    locale.setLanguage(this.state.locale);
    this.renderColorButtons = this.renderColorButtons.bind(this);
    this.renderData = this.renderData.bind(this);
    this.sumPrice = this.sumPrice.bind(this);
  }

  renderColorButtons() {
    return data.colors.map((color, index) => {
      return (
        <Button
          style={{ backgroundColor: color.hex }}
          className={
            this.state.color.name === color.name
              ? "btn btn--color btn--active-color"
              : "btn btn--color"
          }
          key={index}
          onClick={() => this.setState({ color: color })}
        />
      );
    });
  }

  renderData(values, type) {
    if (type !== "model") {
      values = values.filter(value => {
        return this.state.model.available[type].includes(value.id);
      });
    }
    return values.map((value, index) => {
      return (
        <Button
          className={
            this.state[type].name === value.name ? "btn btn--active" : "btn"
          }
          key={index}
          onClick={() => {
            this.sumPrice(type, value);
          }}
        >
          {value.name}
        </Button>
      );
    });
  }

  async sumPrice(type, value) {
    const { engine, gearbox } = this.state;
    await this.setState({ [type]: value });

    if (type === "model") {
      if (!value.available.engine.includes(engine.id)) {
        await this.setState({
          engine: { name: "Not selected", price: 0, id: 99 }
        });
      }
      if (!value.available.gearbox.includes(gearbox.id)) {
        await this.setState({
          gearbox: { name: "Not selected", price: 0, id: 99 }
        });
      }
    }

    const priceSum =
      "$" +
      (this.state.model.price +
        this.state.engine.price +
        this.state.gearbox.price);

    await this.setState({ price: priceSum });
  }

  render() {
    return (
      <Container className="app-container">
        <Row>
          <Col md={8} lg={9} className="main">
            <Row>
              <Col className="title title--strong"> {locale.title}</Col>
            </Row>
            <Row>
              <Col className="title"> {locale.model}</Col>
            </Row>
            <Row>
              <Col>{this.renderData(data.models, "model")}</Col>
            </Row>

            <Row>
              <Col className="title">{locale.engine}</Col>
            </Row>
            <Row>
              <Col>{this.renderData(data.engines, "engine")}</Col>
            </Row>

            <Row>
              <Col className="title">{locale.gearbox}</Col>
            </Row>
            <Row>
              <Col>{this.renderData(data.gearboxes, "gearbox")}</Col>
            </Row>

            <Row>
              <Col className="title">{locale.color}</Col>
            </Row>
            <Row>
              <Col>{this.renderColorButtons()}</Col>
            </Row>
          </Col>
          <Col md={4} lg={3} className="summary">
            <span className="title right">{locale.summary}</span>
            <div className="preview">
              <Ionicon
                icon="md-car"
                fontSize="6em"
                color={this.state.color.hex}
              />
            </div>

            <div className="box-container">
              <SummaryLabel
                title={locale.model}
                value={this.state.model.name}
              />
              <SummaryLabel
                title={locale.engine}
                value={this.state.engine.name}
              />
              <SummaryLabel
                title={locale.gearbox}
                value={this.state.gearbox.name}
              />
              <SummaryLabel
                title={locale.color}
                value={this.state.color.name}
              />
              <SummaryLabel title={locale.price} value={this.state.price} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
const locale = new LocalizedStrings({
  en: {
    title: "CKONFIG 5.1",
    summary: "Summary",
    model: "Model",
    engine: "Engine",
    gearbox: "Gearbox",
    color: "Color",
    price: "Price"
  },
  pl: {
    title: "CKONFIG 5.1",
    summary: "Podsumowanie",
    model: "Model",
    engine: "Silnik",
    gearbox: "Skrzynia Biegow",
    color: "Kolor",
    price: "Cena"
  }
});

export default CarConfig;

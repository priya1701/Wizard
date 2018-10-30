import React, {Component} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";



const styles = {
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
};


class Step4 extends Component {

    constructor(props) {
        super(props);

        this.onChangeSamplePckg = this.onChangeSamplePckg.bind(this);
        this.onChangePckgDisc = this.onChangePckgDisc.bind(this);
        this.onChangeLotId = this.onChangeLotId.bind(this);
        this.onChangeSSCC = this.onChangeSSCC.bind(this);
        this.isValidated = this.isValidated.bind(this);

        this.state = {
            SSCC: props.getStore().SSCC,
            lotId: props.getStore().lotId,
            PACKAGEDESCRIPTION: props.getStore().PACKAGEDESCRIPTION,
            SAMPLE_PACKAGE: props.getStore().SAMPLE_PACKAGE
        }
    }
    onChangeSamplePckg(e) {
        this.setState({
            SAMPLE_PACKAGE: e.target.value
        });
    }
    onChangePckgDisc(e) {
        this.setState({
            PACKAGEDESCRIPTION: e.target.value
        });
    }
    onChangeLotId(e) {
        this.setState({
            lotId: e.target.value
        });
    }
    onChangeSSCC(e) {
        this.setState({
            SSCC: e.target.value
        });
    }
    
    isValidated() {
        let isDataValid = false;    
        isDataValid = true;    
        return isDataValid;
    }
    
    render() {
        const { classes } = this.props;
        return (
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Add Drug</h4>
                            </CardHeader>
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.SSCC}
                                    onChange={this.onChangeSSCC}
                                    labelText="SSCC"
                                    id="SSCC"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.lotId}
                                    onChange={this.onChangeLotId}
                                    labelText="Lot Id"
                                    id="lotId"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.PACKAGEDESCRIPTION}
                                    onChange={this.onChangePckgDisc}
                                    labelText="Package Description"
                                    id="PACKAGEDESCRIPTION"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />                               
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.SAMPLE_PACKAGE}
                                    onChange={this.onChangeSamplePckg}
                                    labelText="Sample Package"
                                    id="SAMPLE_PACKAGE"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            </CardBody>
                        </Card>
                        </GridItem>
                    </GridContainer>
        )
    }

}


export default withStyles(styles)(Step4);;
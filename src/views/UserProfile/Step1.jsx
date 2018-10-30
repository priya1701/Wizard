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


class Step1 extends Component {

    constructor(props) {
        super(props);
      
        this.onChangeSGTIN = this.onChangeSGTIN.bind(this);
        this.onChangeProdId = this.onChangeProdId.bind(this);
        this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
        this.onChangeDrug = this.onChangeDrug.bind(this);
        this.isValidated = this.isValidated.bind(this);

        this.state = {
            SGTIN: props.getStore().SGTIN,
            DRUG: props.getStore().DRUG,
            PRODUCTID: props.getStore().PRODUCTID,
            MANUFACTURER: props.getStore().MANUFACTURER
        }
    }
    
    onChangeSGTIN(e) {
        this.setState({
            SGTIN: e.target.value
        });
    }
    
    onChangeProdId(e) {
        this.setState({
            PRODUCTID: e.target.value
        });
    }
    
    onChangeManufacturer(e) {
        this.setState({
            MANUFACTURER: e.target.value
        });
    }
    onChangeDrug(e) {
        this.setState({
            DRUG: e.target.value
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
                                    value={this.state.SGTIN}
                                    onChange={this.onChangeSGTIN}
                                    labelText="SGTIN"
                                    id="SGTIN"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />                                
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.DRUG}
                                    onChange={this.onChangeDrug}
                                    labelText="Drug"
                                    id="DRUG"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.PRODUCTID}
                                    onChange={this.onChangeProdId}
                                    labelText="Pruduct Id"
                                    id="PRODUCTID"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.MANUFACTURER}
                                    onChange={this.onChangeManufacturer}
                                    labelText="Manufacturer"
                                    id="MANUFACTURER"
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


export default withStyles(styles)(Step1);;
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


class Step3 extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeBatchNo = this.onChangeBatchNo.bind(this);
        this.onChangeStartMrktng = this.onChangeStartMrktng.bind(this);
        this.onChangeEndMrktng = this.onChangeEndMrktng.bind(this);
        this.onChangeExpiry = this.onChangeExpiry.bind(this);
        this.isValidated = this.isValidated.bind(this);

        this.state = {
            BATCHNUMBER: props.getStore().BATCHNUMBER,
            STARTMARKETINGDATE: props.getStore().STARTMARKETINGDATE,
            ENDMARKETINGDATE: props.getStore().ENDMARKETINGDATE,
            EXPIRYDATE: props.getStore().EXPIRYDATE
        }
    }
    
    onChangeBatchNo(e) {
        this.setState({
            BATCHNUMBER: e.target.value
        });
    }    
    onChangeStartMrktng(e) {
        this.setState({
            STARTMARKETINGDATE: e.target.value
        });
    }
    onChangeEndMrktng(e) {
        this.setState({
            ENDMARKETINGDATE: e.target.value
        });
    }
    onChangeExpiry(e) {
        this.setState({
            EXPIRYDATE: e.target.value
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
                                    value={this.state.BATCHNUMBER}
                                    onChange={this.onChangeBatchNo}
                                    labelText="Batch No"
                                    id="BATCHNUMBER"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.EXPIRYDATE}
                                    onChange={this.onChangeExpiry}
                                    labelText="Expiry Date"
                                    id="EXPIRYDATE"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.STARTMARKETINGDATE}
                                    onChange={this.onChangeStartMrktng}
                                    labelText="Start Marketing Date"
                                    id="STARTMARKETINGDATE"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.ENDMARKETINGDATE}
                                    onChange={this.onChangeEndMrktng}
                                    labelText="End Marketing Date"
                                    id="ENDMARKETINGDATE"
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


export default withStyles(styles)(Step3);;
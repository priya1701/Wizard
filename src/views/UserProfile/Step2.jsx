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


class Step2 extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeProductNDC = this.onChangeProductNDC.bind(this);
        this.onChangeNDCExFlag = this.onChangeNDCExFlag.bind(this);
        this.onChangeNDCPckg = this.onChangeNDCPckg.bind(this);
        this.onChangeApplicationNo = this.onChangeApplicationNo.bind(this);
        this.isValidated = this.isValidated.bind(this);
        

        this.state = {
            PRODUCTNDC: props.getStore().PRODUCTNDC,
            NDCPACKAGECODE: props.getStore().NDCPACKAGECODE,
            NDC_EXCLUDE_FLAG: props.getStore().NDC_EXCLUDE_FLAG,
            APPLICATIONNUMBER: props.getStore().APPLICATIONNUMBER
        }
    }
    
    onChangeProductNDC(e) {
        this.setState({
            PRODUCTNDC: e.target.value
        });
    }
    
    onChangeNDCExFlag(e) {
        this.setState({
            NDC_EXCLUDE_FLAG: e.target.value
        });
    }
    
    onChangeNDCPckg(e) {
        this.setState({
            NDCPACKAGECODE: e.target.value
        });
    }
    
    onChangeApplicationNo(e) {
        this.setState({
            APPLICATIONNUMBER: e.target.value
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
                                    value={this.state.PRODUCTNDC}
                                    onChange={this.onChangeProductNDC}
                                    labelText="Product NDC"
                                    id="PRODUCTNDC"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />                                
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.NDCPACKAGECODE}
                                    onChange={this.onChangeNDCPckg}
                                    labelText="NDC Package Code"
                                    id="NDCPACKAGECODE"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.NDC_EXCLUDE_FLAG}
                                    onChange={this.onChangeNDCExFlag}
                                    labelText="NDC Exclude Flag"
                                    id="NDC_EXCLUDE_FLAG"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.APPLICATIONNUMBER}
                                    onChange={this.onChangeApplicationNo}
                                    labelText="Application Number"
                                    id="APPLICATIONNUMBER"
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


export default withStyles(styles)(Step2);;
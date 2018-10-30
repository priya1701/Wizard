import React, {Component} from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
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


class Step5 extends Component {

    constructor(props) {
        super(props);

        this.isValidated = this.isValidated.bind(this);

        this.state = {
        }
    }
    
    isValidated() {
        return new Promise((resolve, reject) => {
            const newData = {
                SGTIN: this.props.getStore().SGTIN,
                SAMPLE_PACKAGE: this.props.getStore().SAMPLE_PACKAGE,
                BATCHNUMBER: this.props.getStore().BATCHNUMBER,
                PRODUCTNDC: this.props.getStore().PRODUCTNDC,
                STARTMARKETINGDATE: this.props.getStore().STARTMARKETINGDATE,
                NDC_EXCLUDE_FLAG: this.props.getStore().NDC_EXCLUDE_FLAG,
                ENDMARKETINGDATE: this.props.getStore().ENDMARKETINGDATE,
                PACKAGEDESCRIPTION: this.props.getStore().PACKAGEDESCRIPTION,
                NDCPACKAGECODE: this.props.getStore().NDCPACKAGECODE,
                PRODUCTID: this.props.getStore().PRODUCTID,
                EXPIRYDATE: this.props.getStore().EXPIRYDATE,
                MANUFACTURER: this.props.getStore().MANUFACTURER,
                DRUG: this.props.getStore().DRUG,
                APPLICATIONNUMBER: this.props.getStore().APPLICATIONNUMBER,
                lotId: this.props.getStore().lotId,
                SSCC: this.props.getStore().SSCC
            }
            axios.post('http://13.126.150.151:3000/api/Product', newData)
            .then(res => {
                console.log(res.data);
                resolve();
            })
            .catch(err => {
                console.log(err);
                reject(); // form contains errors
                return;
            });
        });
      }



    // onSubmit(e) {
    //     e.preventDefault();
    //     const newData = {
    //         SGTIN: this.props.getStore().SGTIN,
    //         SAMPLE_PACKAGE: this.props.getStore().SAMPLE_PACKAGE,
    //         BATCHNUMBER: this.props.getStore().BATCHNUMBER,
    //         PRODUCTNDC: this.props.getStore().PRODUCTNDC,
    //         STARTMARKETINGDATE: this.props.getStore().STARTMARKETINGDATE,
    //         NDC_EXCLUDE_FLAG: this.props.getStore().NDC_EXCLUDE_FLAG,
    //         ENDMARKETINGDATE: this.props.getStore().ENDMARKETINGDATE,
    //         PACKAGEDESCRIPTION: this.props.getStore().PACKAGEDESCRIPTION,
    //         NDCPACKAGECODE: this.props.getStore().NDCPACKAGECODE,
    //         PRODUCTID: this.props.getStore().PRODUCTID,
    //         EXPIRYDATE: this.props.getStore().EXPIRYDATE,
    //         MANUFACTURER: this.props.getStore().MANUFACTURER,
    //         DRUG: this.props.getStore().DRUG,
    //         APPLICATIONNUMBER: this.props.getStore().APPLICATIONNUMBER,
    //         lotId: this.props.getStore().lotId,
    //         SSCC: this.props.getStore().SSCC
    //     }
    //     axios.post('http://13.126.150.151:3000/api/Product', newData)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err));
    // }

    jumpToStep(toStep) {
        // We can explicitly move to a step (we -1 as its a zero based index)
        this.props.jumpToStep(toStep-1); // The StepZilla library injects this jumpToStep utility into each component
    }

    render() {
        const { classes } = this.props;
        return (
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>SGTIN: </InputLabel>
                                {this.props.getStore().SGTIN}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Drug: </InputLabel>
                                {this.props.getStore().DRUG}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Product Id: </InputLabel>
                                {this.props.getStore().PRODUCTID}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Manufacturer: </InputLabel>
                                {this.props.getStore().MANUFACTURER}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Product NDC: </InputLabel>
                                {this.props.getStore().PRODUCTNDC}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>NDC Package Code: </InputLabel>
                                {this.props.getStore().NDCPACKAGECODE}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>NDC Exclude Flag: </InputLabel>
                                {this.props.getStore().NDC_EXCLUDE_FLAG}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Application No.: </InputLabel>
                                {this.props.getStore().APPLICATIONNUMBER}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Batch No.: </InputLabel>
                                {this.props.getStore().BATCHNUMBER}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Expiry Date: </InputLabel>
                                {this.props.getStore().EXPIRYDATE}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Start Marketing Date: </InputLabel>
                                {this.props.getStore().STARTMARKETINGDATE}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>End Marketing Date: </InputLabel>
                                {this.props.getStore().ENDMARKETINGDATE}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>SSCC: </InputLabel>
                                {this.props.getStore().SSCC}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Lot Id: </InputLabel>
                                {this.props.getStore().lotId}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Package Description: </InputLabel>
                                {this.props.getStore().PACKAGEDESCRIPTION}
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                <InputLabel className={classes.labelRoot}>Sample Package: </InputLabel>
                                {this.props.getStore().SAMPLE_PACKAGE}
                                </GridItem>
                            </GridContainer>
                            </CardBody>
                        </Card>
                        </GridItem>
                    </GridContainer>
        )
    }

}


export default withStyles(styles)(Step5);;
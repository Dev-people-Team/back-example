package main

import (
	"fmt"

	"https://github.com/hyperledger/fabric-contract-api-go/tree/main/contractapi"
)

func main() {
	chaincode, err := contractapi.NewChaincode(&chaincode.SmartContract{})

	if err != nil {
		fmt.Printf("Error create D_Grow chaincode: %s", err.Error())
		return
	}

	if err := chaincode.Start(); err != nil {
		fmt.Printf("Error starting D_Grow chaincode: %s", err.Error())
	}

}

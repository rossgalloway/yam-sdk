"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YamGovernor = void 0;
const ethers_1 = require("ethers");
class YamGovernor {
    constructor(abi, signer) {
        this.abi = abi;
        this.signer = signer;
        this.contract = new ethers_1.ethers.Contract(this.abi.address, this.abi.abi, this.signer);
    }
    // Read functions
    async name() {
        return await this.contract.name();
    }
    async votingPeriod() {
        return await this.contract.votingPeriod();
    }
}
exports.YamGovernor = YamGovernor;

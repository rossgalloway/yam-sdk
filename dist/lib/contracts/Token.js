"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YamToken = void 0;
const ethers_1 = require("ethers");
class YamToken {
    constructor(abi, signer) {
        this.abi = abi;
        this.signer = signer;
        this.contract = new ethers_1.ethers.Contract(this.abi.address, this.abi.abi, this.signer);
    }
    // Read functions
    async name() {
        return await this.contract.name();
    }
    async symbol() {
        return await this.contract.symbol();
    }
    async decimals() {
        return await this.contract.decimals();
    }
    async totalSupply() {
        return await this.contract.decimals();
    }
    async balance() {
        return await this.contract.balanceOf(this.signer.getAddress());
    }
    async balanceOf(address) {
        return await this.contract.balanceOf(address);
    }
    async balanceOfUnderlying(address) {
        return await this.contract.balanceOfUnderlying(address);
    }
    async getCurrentVotes(address) {
        return await this.contract.getCurrentVotes(address);
    }
    async getPriorVotes(address, blockNumber) {
        return await this.contract.getPriorVotes(address, blockNumber);
    }
    async allowance(ownerAddress, spenderAddress) {
        return await this.contract.allowance(ownerAddress, spenderAddress);
    }
}
exports.YamToken = YamToken;

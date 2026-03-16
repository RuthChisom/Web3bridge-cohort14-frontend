const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PrimeChecker Contract", function () {

  let primeChecker;

  beforeEach(async function () {
    const PrimeChecker = await ethers.getContractFactory("PrimeChecker");
    primeChecker = await PrimeChecker.deploy();
    await primeChecker.waitForDeployment();
  });

  it("should return false for numbers less than or equal to 1", async function () {
    expect(await primeChecker.isPrime(0)).to.equal(false);
    expect(await primeChecker.isPrime(1)).to.equal(false);
  });

  it("should return true for small prime numbers", async function () {
    expect(await primeChecker.isPrime(2)).to.equal(true);
    expect(await primeChecker.isPrime(3)).to.equal(true);
    expect(await primeChecker.isPrime(5)).to.equal(true);
    expect(await primeChecker.isPrime(7)).to.equal(true);
  });

  it("should return false for non-prime numbers", async function () {
    expect(await primeChecker.isPrime(4)).to.equal(false);
    expect(await primeChecker.isPrime(6)).to.equal(false);
    expect(await primeChecker.isPrime(9)).to.equal(false);
    expect(await primeChecker.isPrime(10)).to.equal(false);
  });

  it("should correctly check larger numbers", async function () {
    expect(await primeChecker.isPrime(97)).to.equal(true);
    expect(await primeChecker.isPrime(100)).to.equal(false);
  });

});
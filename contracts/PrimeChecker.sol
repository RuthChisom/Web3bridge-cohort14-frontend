// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PrimeChecker {

    function isPrime(uint256 number) public pure returns (bool) {
        if (number <= 1) {
            return false;
        }

        if (number == 2) {
            return true;
        }

        for (uint256 i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }
}
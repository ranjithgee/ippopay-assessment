import { render, screen } from '@testing-library/react';
import App from './App';
import strongPasswordChecker from './functions/strongPasswordChecker';
import minimumAbsoluteDifference from './functions/minimumAbsoluteDifference';

// Check if password is strong

test('validate password',()=>{
  expect(strongPasswordChecker('a')).toBe(5);
  expect(strongPasswordChecker('aA1')).toBe(3);
  expect(strongPasswordChecker('1337C0d3')).toBe(0);
})

// check minimum difference

test('minimum possible absolute difference',()=>{
  expect(minimumAbsoluteDifference([3,9,7,3])).toBe(2);
  expect(minimumAbsoluteDifference([-36,36])).toBe(72);
  expect(minimumAbsoluteDifference([2,-1,0,4,-2,-9])).toBe(0);
})

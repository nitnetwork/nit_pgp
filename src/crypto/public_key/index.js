/**
 * @fileoverview Asymmetric cryptography functions
 * @module crypto/public_key
 * @private
 */

import nacl from '@openpgp/tweetnacl/nacl-fast-light';
import * as rsa from './rsa';
import * as elgamal from './elgamal';
import * as elliptic from './elliptic';
import * as dsa from './dsa';

export default {
  /** @see module:crypto/public_key/rsa */
  rsa: rsa,
  /** @see module:crypto/public_key/elgamal */
  elgamal: elgamal,
  /** @see module:crypto/public_key/elliptic */
  elliptic: elliptic,
  /** @see module:crypto/public_key/dsa */
  dsa: dsa,
  /** @see tweetnacl */
  nacl: nacl
};

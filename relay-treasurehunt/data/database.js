/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Model types
export class Game {
}
export class HidingSpot {
}

// Mock data
const game = new Game();
game.id = '1';

const hidingSpots = [];

function _fillHidingSpots(hidingSpots) {
    let hidingSpot;
    const indexOfSpotWithTreasure = Math.floor(Math.random() * 9);
    for (let i = 0; i < 9; i++) {
        hidingSpot = new HidingSpot();
        hidingSpot.id = `${i}`;
        hidingSpot.hasTreasure = (i === indexOfSpotWithTreasure);
        hidingSpot.hasBeenChecked = false;
        hidingSpots.push(hidingSpot);
    }
}
_fillHidingSpots(hidingSpots);

let turnsRemaining = 3;

export function checkHidingSpotForTreasure(id) {
    if (hidingSpots.some(hs => hs.hasTreasure && hs.hasBeenChecked)) {
        return;
    }
    turnsRemaining--;
    const hidingSpot = getHidingSpot(id);
    hidingSpot.hasBeenChecked = true;
}
export function getHidingSpot(id) {
    return hidingSpots.find(hs => hs.id === id);
}
export function getGame() { return game; }
export function getHidingSpots() { return hidingSpots; }
export function getTurnsRemaining() { return turnsRemaining; }
export function resetGame() {
    turnsRemaining = 3;
    hidingSpots.length = 0;
    _fillHidingSpots(hidingSpots);
}

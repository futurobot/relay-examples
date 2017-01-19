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

import Relay from 'react-relay';

export default class RestartGameMutation extends Relay.Mutation {
  static fragments = {};

  getMutation() {
    return Relay.QL`mutation{restartGame}`;
  }
  getCollisionKey() {
    return `restart_${this.props.game.id}`;
  }
  getFatQuery() {
    return Relay.QL`
      fragment on RestartGamePayload @relay(pattern: true) {
        game
      }
    `;
  }
  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        game: this.props.game.id,
      },
    }];
  }
  getVariables() {
    return {};
  }
  getOptimisticResponse() {
    return {};
  }
}

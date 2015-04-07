/*
 * Spreads - Modular workflow assistant for book digitization
 * Copyright (C) 2013-2015 Johannes Baiter <johannes.baiter@gmail.com>
 *
 * This file is part of Spreads.
 *
 * Spreads is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * Spreads is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Spreads.  If not, see <http://www.gnu.org/licenses/>.
 */

import {makeJsonRequest} from "utils/WebAPIUtils.js";
import alt from "alt";

class ConfigActions {
  constructor() {
    this.generateActions("remotelyUpdated", "updateFailed");
  }

  update(config) {
    makeJsonRequest("/api/config", "put", config)
      .then((resp) => this.actions.remotelyUpdated(resp.json()))
      .catch((error) => this.actions.updateFailed(error.json()));
  }
}

export default alt.createActions(ConfigActions);

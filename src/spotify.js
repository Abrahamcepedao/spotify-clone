export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "https://spotify-clone-app-36604.web.app/";

const clientId = "2d57b868fb32447d88bd35ad06e805a9";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] =  decodeURIComponent(parts[1])
            return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
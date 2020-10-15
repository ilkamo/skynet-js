import { SkynetClient } from "./client";
import { FileType, NewFileID, SkyFile, User } from "./skydb";

const client = new SkynetClient("https://siasky.dev");

const appID = "HelloWorld";
const filename = "hello.txt";
const fileID = NewFileID(appID, FileType.PublicUnencrypted, filename);

// skip - used for debugging purposes
describe.skip("siasky.dev end to end", () => {
  it.only("should work", async () => {
    const user = new User("john.doe@gmail.com", "test1234");
    const file = new File(["thisistext"], filename, { type: "text/plain" });
    await client.setFile(user, fileID, new SkyFile(file));
  });
});
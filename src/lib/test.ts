import getCapsuleData from "./capsule";

(async () => {
    const v = await getCapsuleData("C201");
    console.log(v.data.capsule.dragon)
    console.log(v.errors[0].locations);
})();


//Create one object named `photoSlideShow`. This object will represent the functionality of a picture slideshow.
const photoSlideShow = {
//An array called photoList that contains the names of the photos as strings
    photoList: ['flowers', 'cars'],
//An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
    currentPhotoIndex: 0,
//A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";  
    nextPhoto: function(){

        if (this.currentPhotoIndex < this.photoList.length - 1){
            this.currentPhotoIndex++;
            return this.photoList[this.currentPhotoIndex];
        } else if (this.currentPhotoIndex == this.photoList.length- 1){
            return "End of Slideshow"; 
        }
    },

//A prevPhoto() function that does the same thing, but backwards.
    prevPhoto: function(){

        if (this.currentPhotoIndex === 0) {
            return "Beginning of the Slideshow"; 
        } else {
            this.currentPhotoIndex--; 
            return this.photoList[(this.currentPhotoIndex)];
        }
    },
//A function getCurrentPhoto() that returns the current photo from the list.
    getCurrentPhoto: function () {
        return this.photoList[this.currentPhotoIndex];
    },

}

console.log ("Photos in the array: ", photoSlideShow.photoList);
console.log("Next Photo: ", photoSlideShow.nextPhoto());
console.log("previous Photo: ", photoSlideShow.prevPhoto());
console.log("Current Photo: ", photoSlideShow.getCurrentPhoto());
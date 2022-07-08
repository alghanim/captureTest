// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CaptureService } from '../../services/capture.service';
// Import Models
import { Capture } from '../../domain/capture-test_db/capture';

// START - USED SERVICES
/**
* captureService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id capture
*	@returns capture
*
* captureService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id capture
*	@returns capture
*
* captureService.create
*	@description CRUD ACTION create
*	@param Integer cType Object to insert
*	@param String captures
*	@param String filterOutC
*	@param String filterOutR
*	@param String filterOutS
*	@param String url
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Capture
 */
@Component({
    selector: 'app-capture-edit',
    templateUrl: 'capture-edit.component.html',
    styleUrls: ['capture-edit.component.css']
})
export class CaptureEditComponent implements OnInit {
    item: Capture;
    model: Capture;
    formValid: Boolean;

    constructor(
    private captureService: CaptureService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Capture();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.captureService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Capture
     *
     * @param {boolean} formValid Form validity check
     * @param Capture item Capture to save
     */
    save(formValid: boolean, item: Capture): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.captureService.update(item).subscribe(data => this.goBack());
            } else {
                this.captureService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}




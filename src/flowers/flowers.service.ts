import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
    findAll() {
        return [
            {
            id: 1,
            name: 'Rose',
            price: 100,
            description: 'A beautiful red rose'
        },
        {
            id: 2,
            name: 'Lily',
            price: 100,
            description: 'A beautiful red rose'
        },
        {
            id: 3,
            name: 'Tulip',
            price: 100,
            description: 'A beautiful red rose'
        }];
    }
}

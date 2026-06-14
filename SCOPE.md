# CSV Import Rules

This document explains the CSV format and how import errors are handled.

## CSV Columns
The importer expects these columns:

| Column | Required | Notes |
| --- | --- | --- |
| Date | Yes | `YYYY-MM-DD`, not in the future. |
| Description | No | If empty, a default value is used. |
| Group | Yes | Group name or ID must exist. |
| Amount | Yes | Must be a positive decimal. |
| Paid By | Yes | Email of the payer. Must be a group member. |
| Split Type | Yes | One of `EQUAL`, `UNEQUAL`, `PERCENTAGE`, `SHARE`. |
| Splits | Yes | Each split item, like `alice@example.com:50;bob@example.com:50`. |

## Import Errors
Rows that do not pass validation are logged and either fixed or skipped.

- `INVALID_DATE`
  - Date is missing, wrong format, or in the future.
  - Action: skip the row.

- `MISSING_DESCRIPTION`
  - Description is blank.
  - Action: add a default description and import the row.

- `INVALID_AMOUNT`
  - Amount is missing, not a number, or not positive.
  - Action: skip the row.

- `GROUP_NOT_FOUND`
  - Group does not exist.
  - Action: skip the row.

- `PAYER_NOT_FOUND`
  - Payer email is not a member of the group.
  - Action: skip the row.

- `INVALID_SPLITS`
  - Split values are missing or do not match the total.
  - For `UNEQUAL`: split values must sum to the amount.
  - For `PERCENTAGE`: split percentages must sum to 100.
  - For `SHARE`: split shares must be greater than zero.
  - Action: skip the row.

- `PARTICIPANT_NOT_FOUND`
  - One or more split users are not part of the group.
  - Action: skip the row.

- `DUPLICATE_EXPENSE`
  - Same date, description, amount, payer, and group already exist.
  - Action: skip the row.
